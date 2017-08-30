<template>
  <div>
    <hr />
    <button @click="toggleMe()">Toggle me</button>
    <div v-show="isTrue" class="hello">
      <h1>{{ msg }}</h1>
      <p>
        Perhaps the simplest app in the world, all this does is allow you to add links to a list.<br />
        Try adding some links below :)
      </p>
      <div>
        <div>
          <span>URL:</span>
          <input id='urlInput' v-on:keypress.enter='addThing'/>
        </div>
        <div>
          <span>Label:</span>
          <input id='textInput' v-on:keypress.enter='addThing'/>
        </div>
        <button v-on:click='addThing'>Add Link</button>
      </div>
      <h2>List of links:</h2>
      <ul>
        <li v-for='(item, index) in items'>
          <a :href='item.url' target="_blank">{{ item.text }}</a>
          <button v-on:click='deleteThing(index)'>X</button>
        </li>
      </ul>
      <child />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const Child = {
  template: '<div>This is a child component</div>',
};
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Practice Vue App',
      items: [],
    };
  },
  methods: {
    addThing() {
      const urlInput = document.getElementById('urlInput');
      const textInput = document.getElementById('textInput');
      if (urlInput.value !== '' || textInput.value !== '') {
        this.items.push({
          url: urlInput.value,
          text: textInput.value,
        });
        urlInput.value = '';
        textInput.value = '';
      }
    },
    deleteThing(index) {
      this.items.splice(index, 1);
    },
    toggleMe() {
      this.$store.dispatch('toggle');
    },
  },
  computed: {
    isTrue() {
      return this.$store.getters.isTrue;
    }
  },
  components: {
    child: Child,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
