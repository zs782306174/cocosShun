
import { _decorator, Component, Node, Enum, EventHandler, NodePool, Layout, ScrollView, Size, error, v3, size, UITransform, instantiate } from 'cc';
import ListItem from './ListItem';
const { ccclass, property, disallowMultiple, menu, executionOrder } = _decorator;

enum SelectedType {
    NONE = 0,
    SINGLE = 1,//单选
    MULT = 2,//多选
}

/**布局方向 */
enum LayoutDirection {
    /**单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT） */
    LEFT_TO_RIGHT = 1,
    /**单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT） */
    RIGHT_TO_LEFT = 2,
    /**单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM） */
    TOP_TO_BOTTOM = 3,
    /**单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP） */
    BOTTOM_TO_TOP = 4,
}
/**每个Item的布局相关信息 */
interface ItemLayoutInfo {
    id: number,
    x: number,
    y: number,
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
}


@ccclass('DynamicList')
@disallowMultiple()
//脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
@executionOrder(-5000)
export class DynamicList extends Component {

    //模板Item（Node）
    @property({
        type: Node,
        tooltip: '模板Item',
    })
    tmpNode!: Node;
    @property({
        range: [0, 6, 1],
        tooltip: '滚动时候的刷新频率（值越大刷新频率越低、性能越高）',
        slide: true,
    })
    private scrollUpdateRate: number = 1;

    /**分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染）） */
    @property({
        range: [0, 12, 1],
        tooltip: '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
        slide: true,
    })
    private renderCountPerFrame: number = 0;

    //渲染事件（渲染器）
    @property({
        type: EventHandler,
        tooltip: '渲染事件（渲染器）',
    })
    private renderEvent: EventHandler = new EventHandler();

    //选择模式
    @property({
        type: Enum(SelectedType),
        tooltip: '选择模式'
    })
    public selectedMode: SelectedType = SelectedType.NONE;

    //触发选择事件
    @property({
        type: EventHandler,
        tooltip: '触发选择事件',
    })
    private selectedEvent!: EventHandler;
    // ---------------------------- 布局参数 ----------------------------
    private _layout!: Layout;
    /**布局类型 */
    private _layoutType: any;
    /**水平排列子节点的方向 */
    private _horizontalDir!: number;
    /**垂直排列子节点的方向 */
    private _verticalDir!: number;
    /**布局轴向，GRID模式有用 */
    private _startAxis!: any;
    /**布局方向 */
    private _alignCalcType!: LayoutDirection;
    /**缩放模式 */
    private _resizeMode!: any;
    /**顶边距 */
    private _topGap!: number;
    /**右边距 */
    private _rightGap!: number;
    /**底边距 */
    private _bottomGap!: number;
    /**左边距 */
    private _leftGap!: number;
    /**列距 */
    private _columnGap!: number;
    /**行距 */
    private _lineGap!: number;
    /**列数或行数（非GRID模式则=1，表示单列或单行） */
    private _colLineNum!: number;
    // -----------------------------------------------------------------

    private _scrollView!: ScrollView;
    private content!: Node;

    //当前选择id
    private _selectedId: number = -1;
    private _lastSelectedId!: number;
    private _multSelected!: number[];

    /**强制刷新 */
    private _forceUpdate: boolean = false;

    /**逐帧渲染完毕 */
    private _renderDone: boolean = true;
    private _renderCounter!: number;
    private _reRender: boolean = false;

    /**滚动计数 */
    private _scrollCounter!: number;

    private _numItems: number = 0;
    private _actualNumItems!: number;

    private _data: Array<any> = [];

    private _inited: boolean = false;

    /**最后一次刷新的数据 */
    private _lastDisplayItemId!: number[];
    /**当前显示的Item Layout Info */
    public _displayItemInfo: Array<ItemLayoutInfo> = [];

    private _pool!: NodePool;

    private _itemTmp!: Node;
    private _itemSize!: Size;

    private _isVertical!: boolean;

    private _aniDelRuning: boolean = false;

    /**可视区域 */
    private viewTop!: number;
    private viewRight!: number;
    private viewBottom!: number;
    private viewLeft!: number;

    /**回弹区域 */
    private elasticTop!: number;
    private elasticRight!: number;
    private elasticBottom!: number;
    private elasticLeft!: number;

    onLoad() {
        this._init();
    }

    start() {
        this._init();
    }
    onEnable() {
        this._registerEvent();
        this._init();
    }

    onDisable() {
        this._unregisterEvent();
    }

    private _registerEvent() {
        this.node.on('touch-up', this._onScrollTouchUp, this);
        this.node.on('scroll-began', this._onScrollBegan, this, true);
        this.node.on('scroll-ended', this._onScrollEnded, this, true);
        this.node.on('scrolling', this._onScrolling, this, true);
    }

    private _unregisterEvent() {
        this.node.off('touch-up', this._onScrollTouchUp, this);
        this.node.off('scroll-began', this._onScrollBegan, this, true);
        this.node.off('scroll-ended', this._onScrollEnded, this, true);
        this.node.off('scrolling', this._onScrolling, this, true);
    }

    private _init() {
        if (this._inited) {
            return;
        }

        this._scrollView = this.node.getComponent(ScrollView)!;
        if (!this._scrollView) {
            error(this.node.name + ' no assembly ScrollView!');
            return;
        }
        this.content = this._scrollView.content!;
        if (!this.content) {
            error(this.node.name + "'s ScrollView unset content!");
            return;
        }

        this._layout = this.content.getComponent(Layout)!;

        this._layoutType = this._layout.type;
        this._resizeMode = this._layout.resizeMode;
        this._startAxis = this._layout.startAxis;
        this._topGap = this._layout.paddingTop;
        this._rightGap = this._layout.paddingRight;
        this._bottomGap = this._layout.paddingBottom;
        this._leftGap = this._layout.paddingLeft;
        this._columnGap = this._layout.spacingX;
        this._lineGap = this._layout.spacingY;

        this._colLineNum = 0; //列数或行数（非GRID模式则=1，表示单列或单行）;

        this._verticalDir = this._layout.verticalDirection; //垂直排列子节点的方向
        this._horizontalDir = this._layout.horizontalDirection; //水平排列子节点的方向

        this._setTemplateItem(this.tmpNode);

        this._lastDisplayItemId = [];
        this._displayItemInfo = [];
        this._pool = new NodePool();

        this._forceUpdate = false;
        this._renderCounter = 0;
        this._renderDone = true;

        this._initLayoutDir();

        this.content.removeAllChildren();

        this._inited = true;
    }

    /**初始化布局方向 */
    private _initLayoutDir() {
        switch (this._layoutType) {
            case Layout.Type.HORIZONTAL: {
                switch (this._horizontalDir) {
                    case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        this._alignCalcType = LayoutDirection.LEFT_TO_RIGHT;
                        break;
                    case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        this._alignCalcType = LayoutDirection.RIGHT_TO_LEFT;
                        break;
                }
                break;
            }
            case Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case Layout.VerticalDirection.TOP_TO_BOTTOM:
                        this._alignCalcType = LayoutDirection.TOP_TO_BOTTOM;
                        break;
                    case Layout.VerticalDirection.BOTTOM_TO_TOP:
                        this._alignCalcType = LayoutDirection.BOTTOM_TO_TOP;
                        break;
                }
                break;
            }
            case Layout.Type.GRID: {
                switch (this._startAxis) {
                    case Layout.AxisDirection.HORIZONTAL:
                        switch (this._verticalDir) {
                            case Layout.VerticalDirection.TOP_TO_BOTTOM:
                                this._alignCalcType = LayoutDirection.TOP_TO_BOTTOM;
                                break;
                            case Layout.VerticalDirection.BOTTOM_TO_TOP:
                                this._alignCalcType = LayoutDirection.BOTTOM_TO_TOP;
                                break;
                        }
                        break;
                    case Layout.AxisDirection.VERTICAL:
                        switch (this._horizontalDir) {
                            case Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                this._alignCalcType = LayoutDirection.LEFT_TO_RIGHT;
                                break;
                            case Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                this._alignCalcType = LayoutDirection.RIGHT_TO_LEFT;
                                break;
                        }
                        break;
                }
                break;
            }
        }
    }

    /**设置模板item */
    private _setTemplateItem(item: Node) {
        if (!item)
            return;
        this._itemTmp = item;
        this._itemTmp.setPosition(v3(0, 0));
        let transform = this._itemTmp.getComponent(UITransform);
        let contentTransform: UITransform = this.content.getComponent(UITransform)!;

        if (this._resizeMode == Layout.ResizeMode.CHILDREN)
            this._itemSize = this._layout.cellSize;
        else
            this._itemSize = size(transform?.width, transform?.height);

        if (this.selectedMode == SelectedType.MULT)
            this._multSelected = [];

        switch (this._layoutType) {
            case Layout.Type.HORIZONTAL:
                this._colLineNum = 1;
                this._isVertical = false;
                break;
            case Layout.Type.VERTICAL:
                this._colLineNum = 1;
                this._isVertical = true;
                break;
            case Layout.Type.GRID:
                switch (this._startAxis) {
                    case Layout.AxisDirection.HORIZONTAL:
                        //计算列数
                        let trimW = contentTransform.width - this._leftGap - this._rightGap;
                        this._colLineNum = 1;
                        while (1) {
                            if (trimW - ((this._colLineNum * this._itemSize.width) + ((this._colLineNum - 1) * this._columnGap)) < 0) {
                                this._colLineNum--;
                                break;
                            } else {
                                this._colLineNum++;
                            }
                        }
                        this._isVertical = true;
                        break;
                    case Layout.AxisDirection.VERTICAL:
                        //计算行数
                        let trimH: number = contentTransform.height - this._topGap - this._bottomGap;
                        this._colLineNum = 1;
                        while (1) {
                            if (trimH - ((this._colLineNum * this._itemSize.height) + ((this._colLineNum - 1) * this._lineGap)) < 0) {
                                this._colLineNum--;
                                break;
                            } else {
                                this._colLineNum++;
                            }
                        }
                        this._isVertical = false;
                        break;
                }
                break;
        }
    }

    /**重新计算content size */
    private _resizeContent() {
        let result: number = 0;
        let selfTransform: UITransform = this.node.getComponent(UITransform)!;
        let contentTransform: UITransform = this.content.getComponent(UITransform)!;
        switch (this._layoutType) {
            case Layout.Type.HORIZONTAL: {
                result = this._leftGap + (this._itemSize.width * this._numItems) + (this._columnGap * (this._numItems - 1)) + this._rightGap;
                break;
            }
            case Layout.Type.VERTICAL: {
                result = this._topGap + (this._itemSize.height * this._numItems) + (this._lineGap * (this._numItems - 1)) + this._bottomGap;
                break;
            }
            case Layout.Type.GRID: {
                switch (this._startAxis) {
                    case Layout.AxisDirection.HORIZONTAL:
                        let lineNum: number = Math.ceil(this._numItems / this._colLineNum);
                        result = this._topGap + (this._itemSize.height * lineNum) + (this._lineGap * (lineNum - 1)) + this._bottomGap;
                        break;
                    case Layout.AxisDirection.VERTICAL:
                        let colNum: number = Math.ceil(this._numItems / this._colLineNum);
                        result = this._leftGap + (this._itemSize.width * colNum) + (this._columnGap * (colNum - 1)) + this._rightGap;
                        break;
                }
                break;
            }
        }

        let layout: Layout = this.content.getComponent(Layout)!;
        if (layout)
            layout.enabled = false;

        let targetWH: number;
        if (this._isVertical) {
            //-0.1是为了避免content的size不会超出node.size 0.00000001这种情况
            targetWH = result < contentTransform.height ? (contentTransform.height - .1) : result;
            if (targetWH < 0)
                targetWH = 0;
            contentTransform.height = targetWH;
            console.log(contentTransform.height);
            
        } else {
            //-0.1是为了避免content的size不会超出node.size 0.00000001这种情况
            targetWH = result < contentTransform.width ? (contentTransform.width - .1) : result;
            if (targetWH < 0)
                targetWH = 0;
            contentTransform.width = targetWH;
        }
    }

    /**触摸抬起时... */
    private _onScrollTouchUp() {
    }
    /**滚动开始时... */
    private _onScrollBegan() {
    }
    /**滚动结束时... */
    private _onScrollEnded() {
    }

    /**滚动进行时... */
    private _onScrolling(ev: Event|null) {
        if (this._scrollCounter == null) {
            this._scrollCounter = this.scrollUpdateRate;
        }
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this._scrollCounter > 0) {
            this._scrollCounter--;
            return;
        } else {
            this._scrollCounter = this.scrollUpdateRate;
        }

        if (this._aniDelRuning)
            return;

        this._calcViewPos();

        this._displayItemInfo = [];

        let curId: number = 0;
        let endId: number = this._numItems - 1;

        let ww: number = this._itemSize.width + this._columnGap;
        let hh: number = this._itemSize.height + this._lineGap;
        switch (this._alignCalcType) {
            case LayoutDirection.LEFT_TO_RIGHT://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                curId = (this.viewLeft + this._leftGap) / ww;
                endId = (this.viewRight + this._rightGap) / ww;
                break;
            case LayoutDirection.RIGHT_TO_LEFT://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                curId = (-this.viewRight - this._rightGap) / ww;
                endId = (-this.viewLeft - this._leftGap) / ww;
                break;
            case LayoutDirection.TOP_TO_BOTTOM://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                curId = (-this.viewTop - this._topGap) / hh;
                endId = (-this.viewBottom - this._bottomGap) / hh;
                break;
            case LayoutDirection.BOTTOM_TO_TOP://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                curId = (this.viewBottom + this._bottomGap) / hh;
                endId = (this.viewTop + this._topGap) / hh;
                break;
        }
        curId = Math.floor(curId) * this._colLineNum;
        endId = Math.ceil(endId) * this._colLineNum;
        endId--;
        if (curId < 0)
            curId = 0;
        if (endId >= this._numItems)
            endId = this._numItems - 1;

        for (; curId <= endId; curId++) {
            this._displayItemInfo.push(this._calcItemPos(curId)!);
        }
        console.log(this._displayItemInfo);
        
        if (this._displayItemInfo.length <= 0 || !this._numItems) { //if none, delete all.
            this._recycleItem();
            return;
        }
        
        this._actualNumItems = this._displayItemInfo.length;
        let len: number = this._lastDisplayItemId.length;
        //判断数据是否与当前相同，如果相同，return。
        //因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
        if (this._forceUpdate ||
            this._actualNumItems != len ||
            this._displayItemInfo[0].id != this._lastDisplayItemId[0] ||
            this._displayItemInfo[this._actualNumItems - 1].id != this._lastDisplayItemId[len - 1]
        ) {
            this._lastDisplayItemId = [];
            if (this.renderCountPerFrame > 0) { //逐帧渲染
                if (this._numItems > 0) {
                    if (!this._renderDone) {
                        this._reRender = true;  // 逐帧渲染未完成，开始重新渲染开关
                    } else {
                        this._renderCounter = 0;
                    }
                    this._renderDone = false;
                } else {
                    this._recycleItem();
                    this._renderCounter = 0;
                    this._renderDone = true;
                }
            } else { //直接渲染
                for (let c: number = 0; c < this._actualNumItems; c++) {
                    this._createOrUpdateItem(this._displayItemInfo[c]);
                }
                this._recycleItem();
                this._forceUpdate = false;
            }
        }
    }

    update(dt?:number) {
        if (this.renderCountPerFrame <= 0 || this._renderDone)
            return;
        let len: number = (this._renderCounter + this.renderCountPerFrame) > this._actualNumItems ? this._actualNumItems : (this._renderCounter + this.renderCountPerFrame);
        for (let n: number = this._renderCounter; n < len; n++) {
            let data = this._displayItemInfo[n];
            if (data)
                this._createOrUpdateItem(data);
        }

        if (this._renderCounter >= this._actualNumItems - 1) { // 渲染到最后一批时发现用户还在拖拽视图，则需要重新触发绘制，直到用户停止拖拽，才算是渲染完毕
            if (this._reRender) {
                this._renderCounter = 0;
                this._renderDone = false;
                if (!this._scrollView.isScrolling())
                    this._reRender = false;
            } else {
                this._renderDone = true;
                this._recycleItem();
                this._forceUpdate = false;
            }
        } else {
            this._renderCounter += this.renderCountPerFrame;
        }
    }

    /**计算可视范围 */
    private _calcViewPos() {
        let scrollPos = this.content.getPosition();
        let selfTransform: UITransform = this.node.getComponent(UITransform)!;
        let contentTransform: UITransform = this.content.getComponent(UITransform)!;
        switch (this._alignCalcType) {
            case LayoutDirection.LEFT_TO_RIGHT://单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + selfTransform.width;
                this.elasticRight = this.viewRight > contentTransform.width ? Math.abs(this.viewRight - contentTransform.width) : 0;
                this.viewRight += this.elasticRight;
                break;
            case LayoutDirection.RIGHT_TO_LEFT://单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - selfTransform.width;
                this.elasticLeft = this.viewLeft < -contentTransform.width ? Math.abs(this.viewLeft + contentTransform.width) : 0;
                this.viewLeft -= this.elasticLeft;
                break;
            case LayoutDirection.TOP_TO_BOTTOM://单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - selfTransform.height;
                this.elasticBottom = this.viewBottom < -contentTransform.height ? Math.abs(this.viewBottom + contentTransform.height) : 0;
                this.viewBottom += this.elasticBottom;
                break;
            case LayoutDirection.BOTTOM_TO_TOP://单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + selfTransform.height;
                this.elasticTop = this.viewTop > contentTransform.height ? Math.abs(this.viewTop - contentTransform.height) : 0;
                this.viewTop -= this.elasticTop;
                break;
        }
    }

    /**根据提供的id计算出相应的布局信息 */
    private _calcItemPos(id: number) {
        let width: number, height: number, top: number, bottom: number, left: number, right: number, itemX: number, itemY: number;
        let itemLayoutInfo: ItemLayoutInfo = {
            id: id, x: 0, y: 0, left: 0, right: 0, top: 0, bottom: 0
        };
        let itemTransform: UITransform = this._itemTmp.getComponent(UITransform)!;
        let contentTransform: UITransform = this.content.getComponent(UITransform)!;
        switch (this._layoutType) {
            case Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                        width = this._itemSize.width;
                        right = left + width;

                        itemLayoutInfo.left = left;
                        itemLayoutInfo.right = right;
                        itemLayoutInfo.x = left + (itemTransform.anchorX * width)
                        itemLayoutInfo.y = this._itemTmp.position.y;
                        return itemLayoutInfo;
                    }
                    case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                        width = this._itemSize.width;
                        left = right - width;

                        itemLayoutInfo.left = left;
                        itemLayoutInfo.right = right;
                        itemLayoutInfo.x = left + (itemTransform.anchorX * width);
                        itemLayoutInfo.y = this._itemTmp.position.y;
                        return itemLayoutInfo;
                    }
                }
                break;
            case Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                        height = this._itemSize.height;
                        bottom = top - height;

                        itemLayoutInfo.top = top;
                        itemLayoutInfo.bottom = bottom;
                        itemLayoutInfo.x = this._itemTmp.position.x;
                        itemLayoutInfo.y = bottom + (itemTransform.anchorY * height);
                        return itemLayoutInfo;
                    }
                    case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                        height = this._itemSize.height;
                        top = bottom + height;

                        itemLayoutInfo.top = top;
                        itemLayoutInfo.bottom = bottom;
                        itemLayoutInfo.x = this._itemTmp.position.x;
                        itemLayoutInfo.y = bottom + (itemTransform.anchorY * height);
                        return itemLayoutInfo;
                    }
                }
            }
            case Layout.Type.GRID: {
                let colLine: number = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (itemTransform.anchorY * this._itemSize.height);
                                break;
                            }
                            case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (itemTransform.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (itemTransform.anchorX * this._itemSize.width);
                                itemX -= (contentTransform.anchorX * contentTransform.width);
                                break;
                            }
                            case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - itemTransform.anchorX) * this._itemSize.width);
                                itemX -= ((1 - contentTransform.anchorX) * contentTransform.width);
                                itemX *= -1;
                                break;
                            }
                        }

                        itemLayoutInfo.top = top!;
                        itemLayoutInfo.bottom = bottom!;
                        itemLayoutInfo.x = itemX!;
                        itemLayoutInfo.y = itemY!;
                        return itemLayoutInfo;
                    }
                    case Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (itemTransform.anchorX * this._itemSize.width);
                                itemX -= (contentTransform.anchorX * contentTransform.width);
                                break;
                            }
                            case Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (itemTransform.anchorX * this._itemSize.width);
                                itemX += ((1 - contentTransform.anchorX) * contentTransform.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - itemTransform.anchorY) * this._itemSize.height);
                                itemY += ((1 - contentTransform.anchorY) * contentTransform.height);
                                break;
                            }
                            case Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((itemTransform.anchorY) * this._itemSize.height);
                                itemY += (contentTransform.anchorY * contentTransform.height);
                                itemY *= -1;
                                break;
                            }
                        }

                        itemLayoutInfo.left = left!;
                        itemLayoutInfo.right = right!;
                        itemLayoutInfo.x = itemX!;
                        itemLayoutInfo.y = itemY;
                        return itemLayoutInfo;
                    }
                }
                break;
            }
        }
    }

    /**
     * 创建或更新Item
     */
    private _createOrUpdateItem(layoutInfo: ItemLayoutInfo) {
        let item: Node = this.getItemByListId(layoutInfo.id)!;
        let listItem: ListItem;
        if (!item) { //如果不存在
            if (this._pool.size()) {
                item = this._pool.get()!;
            } else {
                item = instantiate(this._itemTmp);
            }
            item.setPosition(v3(layoutInfo.x, layoutInfo.y));
            this.content.addChild(item);
            item.name = layoutInfo.id.toString();
            item.setSiblingIndex(this.content.children.length - 1);
            listItem = item.getComponent(ListItem)!;
            listItem.id = layoutInfo.id;
            listItem.list = this;
            listItem._registerEvent();
            //listItem.setData(this._data[layoutInfo.id]);
            if (this.renderEvent) {
                EventHandler.emitEvents([this.renderEvent], item, layoutInfo.id);
            }
        } else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(v3(layoutInfo.x, layoutInfo.y));
            if (this.renderEvent) {
                EventHandler.emitEvents([this.renderEvent], item, layoutInfo.id);
            }
        }
        item.getComponent(ListItem)?.setData(this._data[layoutInfo.id]);
        this._updateListItem(listItem!);
        if (this._lastDisplayItemId.indexOf(layoutInfo.id) < 0) {
            this._lastDisplayItemId.push(layoutInfo.id);
        }
    }

    private _updateListItem(listItem: ListItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.setSelected(this._selectedId == listItem.id);
                    break;
                case SelectedType.MULT:
                    listItem.setSelected(this._multSelected.indexOf(listItem.id) >= 0);
                    break;
            }
        }
    }


    /**
     * 销毁单个Item
     * @param item 
     */
    private _destroyItem(item: Node|null) {
        item?.removeFromParent();
        item?.destroy();
        item = null;
    }

    /**
     * 回收显示区域外的item，item会放回对象池
     */
    private _recycleItem() {
        let items = this._getOutsideItem();
        for (let n: number = items.length - 1; n >= 0; n--) {
            this._pool.put(items[n]);
        }
    }

    /**
    * 获取在显示区域外的Item
    * @returns
    */
    private _getOutsideItem() {
        let item: Node, isOutside: boolean;
        let result: Array<Node> = [];
        for (let n: number = this.content.children.length - 1; n >= 0; n--) {
            item = this.content.children[n];
            isOutside = true;
            if (isOutside) {
                for (let c: number = this._actualNumItems - 1; c >= 0; c--) {
                    if (!this._displayItemInfo[c])
                        continue;
                    let listId: number = this._displayItemInfo[c].id;
                    if (item.getComponent(ListItem)?.id == listId) {
                        isOutside = false;
                        break;
                    }
                }
            }
            if (isOutside) {
                result.push(item);
            }
        }
        return result;
    }


    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    getItemByListId(listId: number) {
        for (let n: number = this.content.children.length - 1; n >= 0; n--) {
            if (this.content.children[n].getComponent(ListItem)?.id == listId)
                return this.content.children[n];
        }
        return null;
    }

    checkInited(printLog: boolean) {
        let pL: boolean = printLog ? printLog : true;
        if (!this._inited) {
            if (pL)
                error('List initialization not completed!');
            return false;
        }
        return true;
    }

    setData(data: Array<any>) {
        this._data = data;
        let count = data.length;
        if (!this.checkInited(false))
            return;
        if (count == null || count < 0) {
            error('numItems set the wrong::', count);
            return;
        }
        this._numItems = count;
        this._forceUpdate = true;

        this._resizeContent();
        this._onScrolling(null);
    }

    setSelectId(id: number) {
        if (this.selectedMode == SelectedType.SINGLE && id == this._selectedId)
            return;
        let item: Node|null;
        switch (this.selectedMode) {
            case SelectedType.SINGLE: {
                if (id == this._selectedId)
                    return;
                item = this.getItemByListId(id);
                if (!item && id >= 0)
                    return;
                let listItem: ListItem|null;
                if (this._selectedId >= 0)
                    this._lastSelectedId = this._selectedId;
                else
                    this._lastSelectedId = -1;
                this._selectedId = id;
                if (item) {
                    listItem = item.getComponent(ListItem);
                    listItem?.setSelected(true);
                }
                if (this._lastSelectedId >= 0) {
                    let lastItem = this.getItemByListId(this._lastSelectedId);
                    if (lastItem) {
                        lastItem?.getComponent(ListItem)?.setSelected(false);
                    }
                }
                if (this.selectedEvent) {
                    EventHandler.emitEvents([this.selectedEvent], item, id, this._lastSelectedId);
                }
                break;
            }
            case SelectedType.MULT: {
                item = this.getItemByListId(id);
                if (!item)
                    return;
                let listItem = item.getComponent(ListItem);
                if (this._selectedId >= 0)
                    this._lastSelectedId = this._selectedId;
                this._selectedId = id;
                let bool: boolean = !listItem?.getSelected();
                listItem?.setSelected(bool);
                let index: number = this._multSelected.indexOf(id);
                if (bool && index < 0) {
                    this._multSelected.push(id);
                } else if (!bool && index >= 0) {
                    this._multSelected.splice(index, 1);
                }
                if (this.selectedEvent) {
                    EventHandler.emitEvents([this.selectedEvent], item, id, this._lastSelectedId, bool);
                }
                break;
            }
        }
    }
}

