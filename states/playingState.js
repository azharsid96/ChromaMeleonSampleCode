class PlayingState extends State {
    constructor(scene) {
        super(scene);
        //scene.cLevel = 3;
        console.log("cLevel: " + scene.cLevel)
        if (scene.lives == 3)
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'live3');
        else if (scene.lives == 2)
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'live2');  
        else {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'live1');
        } 
        
        if (scene.cLevel == 1) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, '1bug');
        }
        else if (scene.cLevel == 2) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, '2bug');
        }
        else if (scene.cLevel == 3) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, '3bug');
        }
        else if (scene.cLevel == 4) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, '4bug');
        }
        else if (scene.cLevel == 5) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, '5bug');
        }
    }

    update(scene,delta) {
        scene.level.update(delta);
        if (Phaser.Input.Keyboard.JustDown(scene.pauseButton)) scene.paused = !scene.paused;
        
        if (scene.paused) {
            scene.state = new PausedState(scene);
        }

        if (scene.level.levelCondition.over) {
            this.image.destroy();
            scene.state = scene.level.levelCondition.victory ? new WinState(scene) : new LoseState(scene);
            
        }
        
    }

}
