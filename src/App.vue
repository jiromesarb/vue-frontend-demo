<template>
  <div id="app">
      <Navbar class="sticky" />
      <div class="container py-5">
          <router-view/>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.bg-white {
    background: white !important;
}
</style>
