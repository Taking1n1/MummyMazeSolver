<template>
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
</template>

<script lang="ts">

export default {
    name: "PlayerControls",

    props: ['board'],

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
}

</script>

<style lang="scss">
    // Tiles
    .tile {
        button {
            width:100%;
            height:100%;
        }
    }
</style>
