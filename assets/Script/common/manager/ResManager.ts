import { director, resources, Node, Asset, Sprite, Texture2D, SpriteFrame, SpriteAtlas, Prefab, instantiate, AudioSource, AudioClip, assetManager, isValid, ImageAsset, AssetManager } from "cc";

export type ResExt = { ext: string }
export default class ResManager {

    public static preloadScene(bundleName, name: string, progressCallback?) {
        return new Promise<any>(async (resolve, reject) => {
            let bundle = await this.getBundle(bundleName);
            bundle.preloadScene(name, progressCallback, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(err);
                }
            })
        })
    }
    public static getBundle(name: string) {
        return new Promise<AssetManager.Bundle>((resolve, reject) => {
            let bundle = assetManager.getBundle(name);
            if (bundle) {
                resolve(bundle);
                return;
            }
            assetManager.loadBundle(name, (err, bundle) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(bundle);
                }
            })
        })
    }
    public static preloadDir(bundleName, name: string, progressCallback?) {
        return new Promise<any>(async (resolve, reject) => {
            let bundle = await this.getBundle(bundleName);
            bundle.preloadDir(name, progressCallback, (err, assets) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(assets);
                }
            })
        })
    }
    public static get<T extends Asset>(bundleName, url: string) {
        let bundle = assetManager.getBundle(bundleName);
        if (bundle) {
            return resources.get(url) as T;
        } else {
            return null;
        }
    }
    public static async setSpriteImage(sprite: Sprite, url: string, bundleName?) {

        if (bundleName) {
            let img = await this.loadRes<SpriteFrame>(bundleName, url, SpriteFrame);

            sprite.spriteFrame = img;
        } else {
            let img = await this.loadRemote<ImageAsset>(url, null, { ext: '.png' });
            sprite.spriteFrame = SpriteFrame.createWithImage(img);
        }

    }
    public static async setSpriteImageFromAtla(sprite: Sprite, bundleName: string, atlaUrl: string, name: string) {
        let atla = await this.loadRes<SpriteAtlas>(bundleName, atlaUrl, SpriteAtlas);
        sprite.spriteFrame = atla.getSpriteFrame(name);
    }
    public static async loadPrefab(bundleName: string, url: string): Promise<Node> {
        let prefab = await this.loadRes<Prefab>(bundleName, url, Prefab);
        let node = instantiate(prefab);
        return node;
    }
    public static async setAudioSource(audioSource: AudioSource, url: string, isLoop = false, bundleName?: string) {
        if (bundleName) {
            audioSource.clip = await this.loadRes(bundleName, url, AudioClip);
        } else {
            audioSource.clip = await this.loadRemote<AudioClip>(url);
        }
        audioSource.loop = isLoop;
        audioSource.play();
    }

    public static async loadRemote<T extends Asset>(url: string, cb?: Function, ext?: ResExt) {
        return new Promise<T>((resolve, reject) => {

            const res = resources.get(url) as T;

            if (res) {
                if (cb) {
                    cb(res);
                }
                resolve(res);
                return;
            }
            assetManager.loadRemote<T>(url, ext, (err, res) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (cb)
                    cb(res);
                resolve(res);
            });
        })

    }

    public static async loadRes<T extends Asset>(bundleName, url: string, assetType: typeof Asset) {
        return new Promise<T>(async (resolve, reject) => {

            let res = this.get(bundleName, url,) as T;
            if (isValid(res)) {
                resolve(res);
                return;
            }
            let bundle = await this.getBundle(bundleName);
            bundle.load(url, assetType, (err, asset: T) => {
                if (err) {
                    reject(err);
                } else
                    resolve(asset);
            })
        })

    }

    public static async loadDir<T extends Asset>(bundleName: string, url: string, assetType?: typeof Asset, progressCallback?: (c: number, t: number) => void,): Promise<T[]> {
        return new Promise(async (resolve, reject) => {
            let bundle = await this.getBundle(bundleName);
            bundle.loadDir(url, assetType, progressCallback, (err, res: T[]) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (isValid(res)) {
                    resolve(res);
                }
            });
        })
    }



}