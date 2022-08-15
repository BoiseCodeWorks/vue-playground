<template>
  <div id="app">
    <navbar></navbar>
    <div class="readme">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
};
</script>
<style lang="scss">
body {
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
pre {
  padding: 0 !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  border-bottom: 1px solid var(--light);
  padding-bottom: 0.75rem;
  margin: 1.2rem 0;
}

html {
  scroll-behavior: smooth;
}

section {
  line-height: 1.75rem;
  font-size: 16px;
}

.list-tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
}

.list-tags .list-tag {
  background-color: #373f4b;
}

.readme {
  font-family: "Open Sans";
  color: #686565;
  background: white;
  transition: all 0.3s linear;
  font-size: 13pt;
}

pre {
  background: #141d2b;
  padding: 0.2rem 0.5rem !important;
}

code {
  font-size: 87.5%;
  color: #f1f1f1;
  word-wrap: break-word;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
}

.readme img {
  display: inline-block;
  object-fit: contain;
  object-position: center;
  border-radius: 5px;
  margin: 0 1rem;
  max-width: min(500px, 60%);
}

.readme img:only-child {
  display: block !important;
  object-fit: contain;
  object-position: center;
  border-radius: 5px;
  margin: 3rem auto;
  max-width: min(500px, 60%);
}

p,
.readme ul,
.readme li {
  letter-spacing: 0.02rem;
  line-height: 32px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.readme input[type="checkbox"] {
  display: none;
}

.readme ol,
.readme ul {
  padding-left: 2rem;
}

.readme blockquote {
  border-left: 6px solid var(--primary);
  background: #d4d4d850;
  padding: 0.5rem 2rem;
}

.readme blockquote p {
  font-family: "Roboto Slab";
  font-size: 12pt;
  margin: 0;
}
</style>
