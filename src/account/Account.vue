<template>
  <div id="app">
      <h1>Account</h1>
    <div id="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// window.localStorage.setItem('login', 'true')
export default Vue.extend({
  name: 'Account'
})
</script>


<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
