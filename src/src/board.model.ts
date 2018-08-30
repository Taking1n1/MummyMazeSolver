import {Player} from  './pieces/player/player.model';
import {Goal} from  './pieces/misc/goal.model';

export class Board
{
    /** The player going to the goal */
    private player: Player;

    /** The goal to reach */
    private goal: Goal;

    /** The width of the board */
    private _width: number = 4;

    /** The height of the board */
    private _height: number = 4;

    /**
     * Creates a new board to play on
     * @param playerX The x position of the player
     * @param playerY The y position of the player
     * @param goalX The x position of the goal
     * @param goalY The y position of the goal
     */
    constructor(playerX: number, playerY: number, goalX: number, goalY: number) {
        this.player = new Player(playerX, playerY);
        this.goal = new Goal(goalX, goalY);
    }

    get Width(): number {
        return this._width;
    }

    set Width(w: number) {
        this._width = w;
    }

    get Height(): number {
        return this._height;
    }

    set Height(h: number) {
        this._height = h;
    }

    returnTrue() {
        return true;
    }
}