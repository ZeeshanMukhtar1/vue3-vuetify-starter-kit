<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <!-- use vue router for links -->
      <li class="navbar-item">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NabarComponent',
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-item {
  margin-right: 20px;
}

.navbar-item a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

.navbar-item a:hover {
  background-color: #555;
}
</style>
