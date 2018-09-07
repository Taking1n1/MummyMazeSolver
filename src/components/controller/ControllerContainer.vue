<template>
    <div>
        <h3 class="title is-5">Player controls</h3>
        <PlayerControls :board="board" />
    </div>
</template>

<script lang="ts">

import PlayerControls from './PlayerControls.vue';

export default {
    name: "ControllerContainer",
    props: ['board'],
    components: {
        PlayerControls
    }
}

</script>

<style lang="scss">

</style>
