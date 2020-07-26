<template>
  <div id="app">
    <!-- Header of our application -->
    <Header />
    <!-- contains search bar and Search Button -->
    <Search v-on:search-param="productName" />
    <DisplayResult v-bind:search_result="search_result"/>
  </div>
</template>

<script>
import Search from './components/Search'
import Header from './components/layout/Header'
import DisplayResult from './components/DisplayResult'
import axios from 'axios'

const API_KEY = 'dZBL0jdoxGMgGcOxH7Os6SKMgoa9WqUACR3';


export default {
  name: 'App',
   components: {
    Search,
    Header,
    DisplayResult
  },
  data() {
    return {
      search_result: []
    }
  },
  methods: {
    productName(product_name) {
      const URL = `https://price-api.datayuge.com/api/v1/compare/search?api_key=${API_KEY}&product=${product_name}&page=1`;
      axios.get(URL).then(
        (res) => {

          this.search_result = res.data.data;
          console.log(this.search_result)

      })
      .catch((err) => console.log(err));

    },
  }
  

}
</script>

<style>
  #app{
	background : #d7c49eff;
	padding-bottom : 1%;
}
</style>
