import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Turtles from '@/components/Turtles';
import Users from '@/components/Users';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/turtles',
      name: 'Turtles',
      component: Turtles,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
