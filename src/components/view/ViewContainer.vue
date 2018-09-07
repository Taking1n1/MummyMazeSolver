<template>
    <table class="table is-bordered">
    <tfoot>
        <tr v-for="m in board.Height" v-bind:key="'row' + m">

            <BoardTile v-for="n in board.Width" v-bind:key="'tile' + n + ',' + m"
                :board="board"
                :n="n"
                :m="m"
            />
        
        </tr>
    </tfoot>
    </table>
</template>

<script lang="ts">

import BoardTile from './BoardTile.vue';

export default {
    name: "ViewContainer",

    components: {
        BoardTile
    },

    props: ['board']
}

</script>

<style lang="scss">
    table {
        display:inline-block;
    }
</style>