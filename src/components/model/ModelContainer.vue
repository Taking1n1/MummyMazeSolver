<template>
    <div>
        <label class="label">boardWidth</label>
        <input class="input" type="number" placeholder="boardWidth" v-model.number="board.Width">

        <label class="label">boardHeight</label>
        <input class="input" type="number" placeholder="boardHeight" v-model.number="board.Height">
    </div>
</template>

<script lang="ts">

export default {
    name: "ModelContainer",
    props: ['board']
}

</script>

<style lang="scss">

</style>
