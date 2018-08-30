<template>
  <div id="app-container" class="container has-text-centered">
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
        </div>
        <!-- Controller -->
        <div class="column">
          <h2 class="title is-4">Controller</h2>
          </div>
        <!-- Model -->
        <div class="column">
          <h2 class="title is-4">Model</h2>
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

export default {
  name: "App",
  data: () => {
    return {
    };
  }
};
</script>

<style lang="scss">
$font-stack: "Avenir", Helvetica, Arial, sans-serif;

#app-container {
  font-family: $font-stack;
}
</style>
