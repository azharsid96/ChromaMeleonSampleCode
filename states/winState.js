class WinState extends State {
    constructor(scene) {
        super(scene);
        this.Winning = game.sound.add('Winning');
        if (scene.cLevel == 0) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel1');
        }
        else if (scene.cLevel == 1) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel2');
        }
        else if (scene.cLevel == 2) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel3');
        }
        else if (scene.cLevel == 3) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel4');
        }
        else if (scene.cLevel == 4) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel5');
        }
        else if (scene.cLevel == 5) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'winLevel5');
        }
        this.Winning.play();
        this.countdown = 2500;
    }

    update(scene,delta) {
        this.countdown -= delta;
        if (this.countdown <= 0) {
            scene.cLevel = (scene.cLevel + 1) % scene.levels.length;
            scene.level.clear();
            scene.level = Level.fromJson(scene, scene.levels[scene.cLevel]);
            scene.state = new PlayingState(scene);
            this.image.destroy();
        }

    }

}
