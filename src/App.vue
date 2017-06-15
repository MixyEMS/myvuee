<template>
  <div id="app">
    <img src="./assets/logo.png" >
    <h1 v-if="visi" v-bind:title="message">{{ message }}</h1>
    <button v-on:click="reverseMessage">Reverse Message</button>
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'hello vue' + new Date(),
      visi: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    }
  }
}

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
