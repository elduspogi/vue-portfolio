<script>
import initSnowJs
 from './snow';
console.log("%cMade with ❤️ using Vue", "color: aquamarine; font-size: 24px; font-weight: bold; text-shadow: 0px 0px 2px rgb(0,0,0)");

export default {
  mounted() {
    initSnowJs();   
  }
}
</script>

<template>
  <RouterView />
</template>