class LoseState extends State {
    constructor(scene) {
        super(scene);
        this.Losing = game.sound.add('Losing');
        this.Losing.play();
        
        scene.lives--;
        this.countdown = 4000;
        if (scene.lives < 1 && scene.cLevel == 0) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel1');
        }
        else if (scene.lives < 1 && scene.cLevel == 1) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel2');
        }
        else if (scene.lives < 1 && scene.cLevel == 2) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel3');
        }
        else if (scene.lives < 1 && scene.cLevel == 3) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel4');
        }
        else if (scene.lives < 1 && scene.cLevel == 4) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel5');
        }
        else if (scene.lives < 1 && scene.cLevel == 5) {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'gameOverLevel6');

        }
        else {
            this.image = scene.add.image(Globals.SCREEN_DIMENSIONS.x / 2, Globals.SCREEN_DIMENSIONS.y / 2, 'lose');
            this.countdown = 2500;
        }

    }
    update(scene,delta) {
        this.countdown -= delta;
        console.log("lives left: " + scene.lives);
        //this.level.update(delta);
        if (this.countdown <= 0) {
            if (scene.lives > 0) {
                scene.level.clear();
                scene.level = Level.fromJson(scene, scene.levels[scene.cLevel]);
                scene.state = new PlayingState(scene);
            }
            else {
                scene.lives = 3;
                scene.level.clear();
                scene.cLevel = 0;
                scene.level = Level.fromJson(scene, scene.levels[scene.cLevel]);
                scene.state = new PlayingState(scene);
                
            }
            this.image.destroy();
        }
    }
}
