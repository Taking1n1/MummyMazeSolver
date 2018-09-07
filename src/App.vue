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
          <ViewContainer :board="board" />
        </div>

      </div>

      <div class="columns">

        <!-- Controller -->
        <div class="column">
          <h2 class="title is-4">Controller</h2>
          <ControllerContainer :board="board" />
        </div>

        <!-- Model -->
        <div class="column">
          <h2 class="title is-4">Model</h2>
          <ModelContainer :board="board" />
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
import ViewContainer from './components/view/ViewContainer.vue';
import ControllerContainer from './components/controller/ControllerContainer.vue';
import ModelContainer from './components/model/ModelContainer.vue';

/** 
 * Models
 */
import { Board } from './src/board.model';

export default {
  name: "App",

  components: {
    ViewContainer, ControllerContainer, ModelContainer
  },

  data: () => {
    return {
      board: new Board(1, 4, 1, 1)
    };
  },

  methods: {
  }
};
</script>

<style lang="scss">
</style>
