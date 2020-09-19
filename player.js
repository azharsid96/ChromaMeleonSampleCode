/**
 * This class represents a player entity that changes
 * direction based on user input
 */
class Player extends TrailPlacer
{
    /**
     * Creates a player entity.
     * @param {Grid} grid The grid this entity will work upon
     * @param {Game} game The master game object
     * @param {String} sprite_string The name of this entity's sprite asset
     * @param {Vector2} pos The (x, y) coordinate in the grid
     * @param {Number} color The color this entity should be
     * @param {Keys} keys What keys this player responds to
     */
    constructor(grid, game, sprite_string, pos, color, keys)
    {
        super(grid, game, sprite_string, pos, color);
        this._most_recent_input = Vector2.Down();
        this._keys = keys;
        this.PlayerDeath = game.sound.add('PlayerDeath');
        this.PlayerRotate = game.sound.add('PlayerRotate');
        this.ColorChange = game.sound.add('ColorChange');
        this._sprite.scale = 1.25;
    }
    /**
     * Players place the opposite color.
     */
    get placeColor(){
        return Globals.OPPOSITE_COLOR(this.color);
    }
    move()
    {
        if(!this._most_recent_input.equals(this._direction.negative()))
            this._direction = this._most_recent_input;
        super.move();
    }
    /**
     * While most entity behavior functions on discrete timesteps, getting
     * the player's input needs to be continuous.
     * @param {Number} delta Time since last call to update, in milliseconds
     */
    update(delta)
    {
        if(!this._active) return;

        if(Phaser.Input.Keyboard.JustDown(this._keys.change_color)) {
            this.color = Globals.OPPOSITE_COLOR(this.color);
            this.ColorChange.play();
        }

        if (this._keys.up.isDown) {
            this._most_recent_input = Vector2.Up();
            this._sprite.setRotation(0);
            this._sprite.setFlip(0, 0);
            this.PlayerRotate.play();
        }
        else if (this._keys.down.isDown) {
            this._most_recent_input = Vector2.Down();
            this._sprite.setRotation(0);
            this._sprite.setFlip(0, 90);
            this.PlayerRotate.play();
        }
        else if (this._keys.left.isDown) {
            this._most_recent_input = Vector2.Left();
            this._sprite.setFlip(0, 0); 
            this._sprite.setRotation(80);
            this.PlayerRotate.play();
        }
        else if (this._keys.right.isDown) {
            this._most_recent_input = Vector2.Right();
            this._sprite.setFlip(0, 0);
            this._sprite.setRotation(-80);
            this.PlayerRotate.play();
        }
    }

    collideWith(entity)
    {
        super.collideWith(entity)
        if (!this._active)
            this.PlayerDeath.play();
    }
}

/**
 * Represents/stores the keys that a Player uses for control.
 */
class Keys
{
    /**
     * Creates keys from the names of the keys
     * @param {*} game The owning scene/game/soemthing?
     * @param {String} up The name of the up key
     * @param {String} down The name of the down key
     * @param {String} left The name of the left key
     * @param {String} right The name of the right key
     * @param {String} change_color The name of the change_color key
     */
    constructor(game, up, down, left, right, change_color)
    {
        let cursors = game.input.keyboard.addKeys(up+","+down+","+left+","+right+","+change_color);
        
        this.up = cursors[up];
        this.down = cursors[down];
        this.left = cursors[left];
        this.right = cursors[right];
        this.change_color = cursors[change_color];
    }
}
