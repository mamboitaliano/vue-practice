/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isTrue: true,
    urls: [],
    users: [],
  },
  getters: {  // will return whatever is in our state
    isTrue(state) {
      return state.isTrue;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {  // mutations are synchronous
    toggle(state) {
      state.isTrue = !state.isTrue;
    },
    addUser(state, user) {
      debugger;
      state.users.push(user);
    },
    deleteUser(state, user) {
      debugger;
      state.users.splice(state.users.indexOf(user), 1);
    },
    loadUsers(state) {
      debugger; // need to figure out exactly how/where to make ajax calls
      // Vue.$http.get('http://jsonplaceholder.typicode.com/users')
      //   .then((response) => {
      //     context.commit('setUsers', response.data);
      //   });
      state.users = users;
    },
  },
  actions: {  // the dispatch calls the action | actions are async
    toggle(context, payload) {   // "context" is a wrapper object that allows us to do async calls
      debugger;
      context.commit('toggle');
    },
    addUser(context, payload) {
      debugger;
      context.commit('addUser', payload);
    },
    deleteUser(context, payload) {
      debugger;
      context.commit('deleteUser', payload);
    },
    loadUsers(context) {
      context.commit('loadUsers');
    },
  },
});
