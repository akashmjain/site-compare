<template>
  <div id="app">
    <!-- Header of our application -->
 
    <Header />
    <keep-alive include="Home" >
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  
  name: "App",
  components: {
    Header
  } 
}
</script>
<style scoped>

</style>
