<template>
  <div id="app" class="container outside">
    <div class="row justify-content-center">
      <div class="jumbotron col-12">
        <h1 class="display-5">Playground for <img alt="Vue logo" height="50" src="./assets/logo.png">ue</h1>
        <hr class="my-4">
      </div>
    </div>
    <div class="border text-left">
      <navbar></navbar>
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue"
  export default {
    components: { Navbar }
  }
</script>

<style>
  .border {
    border: 1px solid rgba(154, 154, 156, .4);
    border-radius: 5px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-block-end: 2rem;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .outside {
    max-width: 75%;
  }
</style>