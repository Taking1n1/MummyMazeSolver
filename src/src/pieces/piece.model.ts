export abstract class Piece
{
    /** The x position of the piece */
    private xPos: number = 1;

    /** The y position of the piece */
    private yPos: number = 1;

    /**
     * Creates a new piece at a certain place
     * @param x The x position of this piece
     * @param y The y position of this piece
     */
    constructor (x?:number, y?:number) {
        this.xPos = x == undefined ? 1 : x;
        this.yPos = y == undefined ? 1 : y;
    }

    /**
     * Returns position of this piece
     */
    public getPos(): object {
        return {
            x: this.xPos,
            y: this.yPos
        };
    }

    /**
     * Sets the x position of this piece
     * @param x The new x position to set
     */
    public setX(x: number): void {
        this.xPos = x;
    }

    /**
     * Sets the y position of this piece
     * @param y The new y position to set
     */
    public setY(y: number): void {
        this.yPos = y;
    }
}