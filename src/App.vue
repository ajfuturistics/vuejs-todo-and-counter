<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>MyVueApp</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
h1 {
  font-weight: 700;
  padding: 0.5rem;
}
header {
  width: 100%;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  display: flex;
  gap: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>
