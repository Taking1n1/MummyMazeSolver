import {Player} from  './pieces/player/player.model';
import {Goal} from  './pieces/misc/goal.model';

export class Board
{
    /** The player going to the goal */
    private _player: Player;

    /** The goal to reach */
    private _goal: Goal;

    /** The width of the board */
    private _width: number = 4;
    get Width(): number {
        return this._width;
    }
    set Width(w: number) {
        this._width = w;
    }

    /** The height of the board */
    private _height: number = 4;
    get Height(): number {
        return this._height;
    }
    set Height(h: number) {
        this._height = h;
    }

    /**
     * Creates a new board to play on
     * @param playerX The x position of the player
     * @param playerY The y position of the player
     * @param goalX The x position of the goal
     * @param goalY The y position of the goal
     */
    constructor(playerX: number, playerY: number, goalX: number, goalY: number) {
        this._player = new Player(playerX, playerY);
        this._goal = new Goal(goalX, goalY);
    }

    /**
     * Returns true if the player is at the specified spot, false if not
     * @param x The possible x position of the player
     * @param y The possible y position of the player
     */
    public isPlayerHere(x: number, y: number) {
        return this._player.X == x && this._player.Y == y;
    }

    /**
     * Gets the position of the player
     */
    /*public getPlayerPos(): object {
        return {
            x: this._player.X,
            y: this._player.Y
        };
    }*/
}