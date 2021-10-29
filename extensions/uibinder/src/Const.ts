export default class Const {
    /** 规范符号 */
    static ScriptsDir = "assets/Script/AutoScripts";        // 代码生成路径
    static STANDARD_Separator = '@';                        // 分隔符
    static STANDARD_End = '#';                              // 绑定后缀, 结点添加此后缀后, 不会查询其子节点
    static SeparatorMap :any = {

        "Node": "cc.Node",
        "Label": "cc.Label",
        "Button": "cc.Button",
        "Sprite": "cc.Sprite",
        "RichText": " cc.RichText",
        "Mask": "cc.Mask",
        "MotionStreak": "cc.MotionStreak",
    
        "TiledMap": "cc.TiledMap",
    
        "TiledTile": "cc.TiledTile",
    
        //"Spine"       : Skeleton,
        "Graphics": "cc.Graphics",
        // "Animation"   : Animation,
    
        "WebView": "cc.WebView",
    
        "EditBox": "cc.EditBox",
    
        "ScrollView": "cc.ScrollView",
    
        "VideoPlayer": "cc.VideoPlayer",
    
        "ProgressBar": "cc.ProgressBar",
    
        "PageView": "cc.PageView",
    
        "Slider": "cc.Slider",
    
        "Toggle": "cc.Toggle",
    };
}
