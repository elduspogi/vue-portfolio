<script>
import initSnowJs from './snow';

console.log("Made using Vue with ❤️");

export default {
  mounted() {
    initSnowJs();
  },
  // unmounted() {
  //   initSnowJs();
  // }
}
</script>

<template>
  <RouterView />
</template>