<template>
  <div id="app">
    <router-view></router-view>
    <turtles msg='Who likes turtles?' />
    <users />
  </div>
</template>

<script>
import Turtles from './components/Turtles';
import Users from './components/Users';

export default {
  name: 'app',
  components: {
    Turtles,
    Users,
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
