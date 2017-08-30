<template>
  <div class='users'>
    <hr />
    <h1>Users</h1>
    <form v-on:submit='addUser'>
      <input id='nameInput' type='text' v-model='newUser.name' placeholder='enter name' />
      <br />
      <input id='emailInput' type='text' v-model='newUser.email' placeholder='enter email' />
      <br />
      <input type='submit' value='Submit'>
    </form>
    <ul>
      <li v-for='user in users'>
        <input type='checkbox' class='toggle' v-model='user.contacted' />
        <span :class='{contacted: user.contacted}'>
          {{ user.name }}: {{ user.email }} <button v-on:click='deleteUser(user)'>X</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'users',
    data() {
      return {
        newUser: {},
        users: [],
      };
    },
    methods: {
      addUser(e) {
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        nameInput.value = '';
        emailInput.value = '';
        this.$store.dispatch(
          'addUser',
          {
            name: this.newUser.name,
            email: this.newUser.email,
            contacted: false,
          },
        );
        e.preventDefault();
      },
      deleteUser(user) {
        this.$store.dispatch('deleteUser', user);
      },
    },
    created() {
      this.$store.dispatch('loadUsers');
    }
  };
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
</style>
