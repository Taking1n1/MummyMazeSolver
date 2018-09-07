<template>
        <th class="has-text-centered" v-bind:class=" {
            'wall-left': board.Walls.IsThereWall(n, m, n - 1, m),
            'wall-right': board.Walls.IsThereWall(n, m, n + 1, m),
            'wall-top': board.Walls.IsThereWall(n, m, n, m - 1),
            'wall-bottom': board.Walls.IsThereWall(n, m, n, m + 1),
        } ">
            <!-- Player -->
            <div v-show="board.Player.IsHere(n, m)">
                <i class="fas fa-male"></i>
            </div>
            
            <!-- Goal -->
            <div v-show="board.Goal.IsHere(n, m)">
                <i class="fas fa-flag-checkered"></i>
            </div>
        </th>
</template>

<script lang="ts">

export default {
    name: "BoardTile",
    props: ['board', 'n', 'm']
}

</script>

<style lang="scss">
    // Table styles
    $cell-size: 55px;
    th {
        width: $cell-size;
        height: $cell-size;
    }

    // Walls
    $wall-thickness: 5px;
    .wall-left {
        border-left: $wall-thickness solid black !important;
    }
    .wall-right {
        border-right: $wall-thickness solid black !important;
    }
    .wall-top {
        border-top: $wall-thickness solid black !important;
    }
    .wall-bottom {
        border-bottom: $wall-thickness solid black !important;
    }
</style>
