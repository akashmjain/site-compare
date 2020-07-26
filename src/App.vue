<template>
  <div id="app">
    <!-- Header of our application -->
    <Header />
    <router-view/>
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


<style>
  #app{
	background : #d7c49eff;
	padding-bottom : 1%;
}
=======
<style scoped>

