<template>
  <div class='turles'>
    <hr />
    <h1>Turtle time!</h1>
    <h2>{{ msg }}</h2>
    <label>Turtle first name: </label>
    <input type='text' v-model='turtle.firstName' />
    <br />
    <label>Turtle first name: </label>
    <input type='text' v-model='turtle.lastName' />
    <h3>{{ fullName }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Turtles',
  props: {
    msg: {
      type: String,
      default: 'I like turtles',
    },
  },
  data() {
    return {
      turtle: {
        firstName: 'Dat',
        lastName: 'Boi',
      },
    };
  },
  computed: {
    fullName() {
      return `${this.turtle.firstName} ${this.turtle.lastName}`;
    },
  },
};
</script>
