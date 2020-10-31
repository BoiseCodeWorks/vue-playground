<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
};
</script>
<style lang="scss">
body{
  background: #f8f8f8;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16pt;
  line-height: 2.5rem;
}
#app {
  padding-bottom: 1.5rem;
}
pre{
  padding: 0 !important;
}
h1,h2,h3,h4,h5,h6{
  border-bottom: 1px solid var(--light);
  padding-bottom: .75rem;
  margin: 1.2rem 0;
}
</style>
