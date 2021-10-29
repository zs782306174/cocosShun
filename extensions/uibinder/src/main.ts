
export const methods: { [key: string]: (...any: any) => any } = {
    open_panel() {
        Editor.Panel.open('uibinder');
    },
    bind(){
        const options = {
            name: 'uibinder',
            method: 'bind',
            args: []
        };
        Editor.Message.request('scene', 'execute-scene-script', options);
    }
};

/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
export const load = function() { };

/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
export const unload = function() { };
