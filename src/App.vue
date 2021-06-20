<template>
  <NavBar/>
  <div class="main-panel">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
import NavBar  from '@/components/NavBar.vue';
import Footer  from '@/components/Footer.vue';

export default {
  components: { 
    NavBar, 
    Footer 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-panel {
  margin-top: 30px;
  padding-top: 30px;
  position: relative;
}
</style>
