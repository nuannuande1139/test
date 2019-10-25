<template>
  <div id="app">
    <One/>
    <hr/>
    <hr/>
    <Two/>
    <hr/>
    <hr/>
    <Three/>
  </div>
</template>

<script>
import One from './components/vuex中state的使用';
import Two from './components/vuex中getter的使用';
import Three from './components/vuex中mutation的使用';
export default {
  name: 'App',
  components: {
    One,
    Two,
    Three
  }
};
</script>

<style scoped>
</style>
