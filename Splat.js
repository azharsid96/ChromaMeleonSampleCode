/**
 * This class represents a section of wall that merely exists
 * as an obstacle or world boundary.
 */
class Splat extends Entity
{
    /**
     * Creates a wall.
     * @param {Grid} grid The grid this entity will work upon
     * @param {Game} game The master game object
     * @param {String} sprite_string The name of this entity's sprite asset
     * @param {Vector2} pos The (x, y) coordinate in the grid
     */
    constructor(grid, game, sprite_string, pos, color)
    {
        super(grid, game, sprite_string, pos, color);
    }
}