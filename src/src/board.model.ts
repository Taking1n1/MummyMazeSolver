import {Player} from  './pieces/player/player.model';
import {Goal} from  './pieces/misc/goal.model';
import {Walls} from  './walls.model';

export class Board
{
    /** The player going to the goal */
    private _player: Player;
    get Player(): Player {
        return this._player;
    }

    /** The goal to reach */
    private _goal: Goal;
    get Goal(): Goal{
        return this._goal;
    }

    /** The walls */
    private _walls: Walls;
    get Walls(): Walls {
        return this._walls;
    }

    /** The width of the board */
    private _width: number = 6;
    get Width(): number {
        return this._width;
    }
    set Width(w: number) {
        this._width = w;
    }

    /** The height of the board */
    private _height: number = 6;
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
        this._walls = new Walls();

        // Init
        this.Walls.AddWall(4, 1, 5, 1);

        this.Walls.AddWall(1, 2, 1, 3);
        this.Walls.AddWall(1, 2, 2, 2);

        this.Walls.AddWall(2, 3, 2, 4);

        this.Walls.AddWall(1, 5, 2, 5);
        this.Walls.AddWall(1, 5, 1, 6);

        this.Walls.AddWall(3, 2, 3, 3);
        this.Walls.AddWall(3, 2, 4, 2);

        this.Walls.AddWall(4, 2, 4, 3);

        this.Walls.AddWall(5, 3, 5, 2);
        this.Walls.AddWall(5, 3, 4, 3);
        this.Walls.AddWall(5, 3, 6, 3);

        this.Walls.AddWall(3, 6, 3, 5);
        this.Walls.AddWall(4, 6, 4, 5);
        this.Walls.AddWall(5, 6, 5, 5);
        this.Walls.AddWall(5, 6, 6, 6);
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