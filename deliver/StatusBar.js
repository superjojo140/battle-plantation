class StatusBar extends PIXI.Container {
    constructor(parent, progress) {
        super();
        //position relative to parent
        this.setProgress(progress);
    }
    updateView() {
        //Paint yourself
    }
    setProgress(progress) {
        this.progress = progress;
        this.updateView();
    }
}
