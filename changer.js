class Changer extends Entity {
    /**
     * Creaters a color changing-flower.
     * @param {Grid} grid the grid this entity is on.
     * @param {game} game the scene this entity is to be added to.
     * @param {boolean} active whether or not the flower can be used
     * @param {Vector2} pos the grid position the flower is on
     */
    constructor(grid, game, active, pos) {
        super(grid, game, active ? "live_flower" : "dead_flower", pos);
        this.alive = active;
    }

    collideWith(entity) {
        if (this.alive && entity instanceof Player) {
            entity.color = Globals.OPPOSITE_COLOR(entity.color);
            this._sprite.setTexture("dead_flower");// = this._game.textures.get("dead_flower");

            console.log(this._game.textures.get('dead_flower'));
            this.alive = false;
        }
    }
}