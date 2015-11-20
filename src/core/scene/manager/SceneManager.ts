/**
 * Created by yangsong on 2014/11/28.
 * 场景管理类
 */
class SceneManager extends BaseClass {
    private _scenes:any;
    private _currScene:number;

    /**
     * 构造函数
     */
    public constructor() {
        super();
        this._scenes = {};
    }

    /**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    public register(key:number, scene:BaseScene):void {
        this._scenes[key] = scene;
    }

    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    public runScene(key:number):void {
        var nowScene:BaseScene = this._scenes[key];
        if (nowScene == null) {
            Log.trace("场景" + key + "不存在");
            return;
        }

        var oldScene:BaseScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }

        nowScene.onEnter();
        this._currScene = key;

        //让Fps永远显示在最上层
        App.DebugUtils.openFps();
    }

    /**
     * 获取当前Scene
     * @returns {number}
     */
    public getCurrScene():number {
        return this._currScene;
    }
}
