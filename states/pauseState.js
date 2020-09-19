class PausedState extends State {
    constructor(scene) {
        super(scene);
    }

    update(scene,delta) {
        if (Phaser.Input.Keyboard.JustDown(scene.pauseButton)) scene.paused = !scene.paused;
        if (!scene.paused)
            scene.state = new PlayingState(scene);      

    }

}
