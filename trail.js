
/**
 * This class represents a section of trail left behind by a
 * TrailPlacer object.
 */
class Trail extends Entity
{
    /**
     * Creates a trail.
     * @param {Grid} grid The grid this entity will work upon
     * @param {Game} game The master game object
     * @param {String} sprite_string The name of this entity's sprite asset
     * @param {Vector2} pos The (x, y) coordinate in the grid
     * @param {TrailPlacer} parent The entity that placed this trail
     * @param {Number} color The color for the trail
     */
    constructor(grid, game, sprite_string, pos, parent, color)
    {
        super(grid, game, sprite_string, pos, color);
        this._sprite.rotation = Math.atan2(parent._direction.y, parent._direction.x);
        this._sprite.setFlipY(parent._movingClockwise);
        this._time_left = Globals.TRAIL_LIFESPAN;
    }

    move()
    {
        this._time_left--;
        if(this._time_left <= 0)
        {
            this._active = false;
        }
        else
        {
            this._sprite.alpha = (this._time_left/30) * (Globals.MAX_TRAIL_OPACITY - Globals.MIN_TRAIL_OPACITY) + (Globals.MIN_TRAIL_OPACITY);
        }
    }
}