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

          <table class="table is-bordered">
            <tfoot>
              <tr v-for="m in boardHeight" v-bind:key="'height' + m">
                <th v-for="n in boardWidth" v-bind:key="'width' + n" v-bind:class="{ 'mm-player': board.returnTrue() }"></th>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>

      <div class="columns">

        <!-- Controller -->
        <div class="column">
          <h2 class="title is-4">Controller</h2>
        </div>

        <!-- Model -->
        <div class="column">
          <h2 class="title is-4">Model</h2>

          <label class="label">boardWidth</label>
          <input class="input" type="number" placeholder="boardWidth" v-model.number="boardWidth">

          <label class="label">boardHeight</label>
          <input class="input" type="number" placeholder="boardHeight" v-model.number="boardHeight">

        </div>

      </div>
    </section>

  </div>
</template>

<script lang="ts">
/*import fontawesome from "@fortawesome/fontawesome";
import {
  faUser,
  faCheck,
  faDownload
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(faUser, faCheck, faDownload);*/

import { Board } from './src/board.model';

export default {
  name: "App",
  data: () => {
    return {
      boardWidth: 3,
      boardHeight: 4,
      board: new Board(),
      playerAt: (n: number, m: number) => {
        return (n === 3 && m === 2) ;
      }
    };
  }
};
</script>

<style lang="scss">
</style>
