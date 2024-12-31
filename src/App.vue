<script>
import Fireworks from 'fireworks-js';

// import initSnowJs from './snow';

console.log("Made using Vue with ❤️");

export default {
  name: 'App',
  mounted() {
    // Snow JS
    // initSnowJs();

    this.initializeFireworks();
  },
  methods: {
    initializeFireworks() {
      const container = this.$refs.fireworksContainer;

      this.fireworks = new Fireworks(container, {
        autoresize: false,
      });

      this.fireworks.start();
    }
  }
}
</script>

<template>
  <div id="app">
    <div ref="fireworksContainer" class="fireworks-bg" />
    <RouterView />
  </div>
</template>

<style>
.app {
  position: relative;
  overflow: hidden;
  /* width: 100vw;
  height: 100vh; */
}

.fireworks-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 100%;
  z-index: -1;
}

.app > * {
  position: relative;
  z-index: 1;
}
</style>