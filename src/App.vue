<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';

</script>

<template>
  <h1>Hello App!</h1>
  
  <HelloWorld/>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>