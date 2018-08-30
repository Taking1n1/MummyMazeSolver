export abstract class Piece
{
    /** The x position of the piece */
    private _x: number = 1;
    get X(): number {
        return this._x;
    }
    set X(x: number) {
        this._x = x;
    }

    /** The y position of the piece */
    private _y: number = 1;
    get Y(): number {
        return this._y;
    }
    set Y(y: number) {
        this._y = y;
    }

    /**
     * Creates a new piece at a certain place
     * @param x The x position of this piece
     * @param y The y position of this piece
     */
    constructor (x?:number, y?:number) {
        this._x = x == undefined ? 1 : x;
        this._y = y == undefined ? 1 : y;
    }
}