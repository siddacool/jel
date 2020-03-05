<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Home from './view/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: 'Spartan', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
