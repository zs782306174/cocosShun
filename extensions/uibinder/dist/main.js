"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unload = exports.load = exports.methods = void 0;
exports.methods = {
    open_panel() {
        Editor.Panel.open('uibinder');
    },
    bind() {
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
const load = function () { };
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
const unload = function () { };
exports.unload = unload;
