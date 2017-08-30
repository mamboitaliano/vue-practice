<template>
  <div id="app">
    <button @click="toggleMe(1)">Toggle me</button>
    <hr />
    <img v-if="isTrue" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Turtles from './components/Turtles';
import Users from './components/Users';

export default {
  name: 'app',
  components: {
    Turtles,
    Users,
  },
  data() {
    return {};
  },
  methods: {
    toggleMe(payload) {
      this.$store.dispatch('toggle', payload);
    },
  },
  computed: {
    isTrue() {
      return this.$store.getters.isTrue;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
