<template>
  <div id="app-container" class="container is-fluid has-text-centered">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Mummy Maze Solver
          </h1>
          <h2 class="subtitle">
            Model a game of Mummy Maze and find solutions for it!
          </h2>
        </div>
      </div>
    </section>

    <!-- Other -->
    <section class="section">
      <div class="columns">

        <!-- View -->
        <div class="column">
          <h2 class="title is-4">View</h2>

          <!-- Board -->
          <BoardView :board="board" />

        </div>

      </div>

      <div class="columns">

        <!-- Controller -->
        <div class="column">
          <h2 class="title is-4">Controller</h2>

          <h3 class="title is-5">Player controls</h3>
          <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
              <div class="tile is-child"></div>
              <div class="tile is-child"><button v-on:click="playerMove(-1, 0)">LEFT</button></div>
            </div>
            <div class="tile is-parent is-vertical">
              <div class="tile is-child"><button v-on:click="playerMove(0, -1)">UP</button></div>
              <div class="tile is-child"><button v-on:click="playerMove(0, 1)">DOWN</button></div>
            </div>
            <div class="tile is-parent is-vertical">
              <div class="tile is-child"></div>
              <div class="tile is-child"><button v-on:click="playerMove(1, 0)">RIGHT</button></div>
            </div>
          </div>

        </div>

        <!-- Model -->
        <div class="column">
          <h2 class="title is-4">Model</h2>

          <label class="label">boardWidth</label>
          <input class="input" type="number" placeholder="boardWidth" v-model.number="board.Width">

          <label class="label">boardHeight</label>
          <input class="input" type="number" placeholder="boardHeight" v-model.number="board.Height">

        </div>

      </div>
    </section>

  </div>
</template>

<script lang="ts">
/**
 *  Dependencies
 */
import fontawesome from "@fortawesome/fontawesome";
import {
  faMale, // Player
  faFlagCheckered, // Goal
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(faMale, faFlagCheckered);

/**
 * Vue components
 * */
import BoardView from './components/view/BoardView.vue';

/** 
 * Models
 */
import { Board } from './src/board.model';

export default {
  name: "App",

  components: {
    BoardView
  },

  data: () => {
    return {
      board: new Board(1, 4, 1, 1)
    };
  },

  methods: {
    /**
     * Moves the player given an x and y offset
     */
    playerMove: function(this: any, x: number, y: number) {
      this.board.Player.X += x;
      this.board.Player.Y += y;
      console.log(this.board.Player.X + ", " + this.board.Player.Y);
    }
  }
};
</script>

<style lang="scss">
</style>
