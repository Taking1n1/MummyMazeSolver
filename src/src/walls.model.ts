export class Walls
{
    /**
     * An object for storing walls. If it is true, there is a wall.
     * If it doesn't exist / false, there isn't a wall
     */
    private walls: { [key:string] : string[] };

    constructor() {
        this.walls = {};
    }

    /**
     * Returns true if there is a wall between two points, false if not
     * @param x1 The x coordinate of the first point
     * @param y1 The y coordinate of the first point
     * @param x2 The x coordinate of the second point
     * @param y2 The y coordinate of the second point
     */
    public IsThereWall(x1:number, y1:number, x2:number, y2:number): boolean
    {
        // Converts to point strings
        let pointStr1 = x1 + "," + y1;
        let pointStr2 = x2 + "," + y2;

        // Checks if it has the first point str
        if (this.walls.hasOwnProperty(pointStr1))
        {
            // If it has second point str, it's a wall. If not, it's not a wall
            return this.walls[pointStr1].indexOf(pointStr2) > -1;
        }

        // It doesn't exist, return false
        return false;
    }

    /**
     * Adds a wall to the board
     * @param x1 The x coordinate of the first point
     * @param y1 The y coordinate of the first point
     * @param x2 The x coordinate of the second point
     * @param y2 The y coordinate of the second point
     */
    public AddWall(x1:number, y1:number, x2:number, y2:number): void
    {
        // Converts to point strings
        let pointStr1 = x1 + "," + y1;
        let pointStr2 = x2 + "," + y2;

        // If there is nothing on first point str, create it
        if (!this.walls.hasOwnProperty(pointStr1))
            this.walls[pointStr1] = [];

        // If there is nothing on second point str, create it
        if (!this.walls.hasOwnProperty(pointStr2))
            this.walls[pointStr2] = [];

        // Append to point strings
        this.walls[pointStr1].push(pointStr2);
        this.walls[pointStr2].push(pointStr1);
    }
}