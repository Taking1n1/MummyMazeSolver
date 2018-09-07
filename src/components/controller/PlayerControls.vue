<template>
    <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical">
        <div class="tile is-child"></div>
        <div class="tile is-child"><button class="button is-primary" v-on:click="board.MovePiece(board.Player, 'left')">LEFT</button></div>
    </div>
    <div class="tile is-parent is-vertical">
        <div class="tile is-child"><button class="button is-primary" v-on:click="board.MovePiece(board.Player, 'up')">UP</button></div>
        <div class="tile is-child"><button class="button is-primary" v-on:click="board.MovePiece(board.Player, 'down')">DOWN</button></div>
    </div>
    <div class="tile is-parent is-vertical">
        <div class="tile is-child"></div>
        <div class="tile is-child"><button class="button is-primary" v-on:click="board.MovePiece(board.Player, 'right')">RIGHT</button></div>
    </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "PlayerControls",

    props: ['board'],

    methods: {
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
