<template>
  <div class="navbar navbar-inverse mb-4">
    <div class="navbar-brand">
      <router-link class="no-high" :to="{ name: 'home' }">
        <img src="../assets/logo.png" alt="logo" height="40" />ue Playground
      </router-link>
    </div>
    <div class="links">
      <router-link :to="{ name: 'expressions' }">Expressions</router-link>
      <router-link :to="{ name: 'bindings' }">Bindings</router-link>
      <router-link :to="{ name: 'looping' }">Looping</router-link>
      <router-link :to="{ name: 'computed-properties' }"
        >Computed Properties</router-link
      >
      <router-link :to="{ name: 'conditional-rendering' }">
        Conditional Rendering
      </router-link>
      <router-link :to="{ name: 'events' }">Events</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
a:not(.no-high) {
  padding: 1.2rem;
  color: var(--secondary);
  border-bottom: 4px solid transparent;
  padding-bottom: 1.2rem;
  transition: all 0.3s linear;
  &.router-link-exact-active {
    color: var(--info);
    border-color: var(--info);
  }
  &:hover {
    background: var(--dark);
    color: var(--light);
  }
}
</style>