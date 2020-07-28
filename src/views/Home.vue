<template>
  <div id="app"  class="mt-5">
    
    <!-- contains search bar and Search Button -->
    <Search v-on:search-param="productName"  />
    <!-- DisplayResult of search operation latter we'll put this data onto a routes -->
    <DisplayResult v-bind:search_result="search_result"/>
    <!-- Not yet implemented should contain next and previous page and navigate through pages like google search engine -->
    <FooterSearch />

  </div>
</template>

<script>
import Search from '../components/home/Search';
import DisplayResult from '../components/home/DisplayResult';
import FooterSearch from '../components/layout/FooterSearch';
import '../style/intern_project.css';
import axios from 'axios';


// API key to get data from price-api dataset
const API_KEY = 'dZBL0jdoxGMgGcOxH7Os6SKMgoa9WqUACR3';


export default {
  name: 'Home',
   components: {
    Search,
    DisplayResult,
    FooterSearch
  },
  data() {
    return {
      search_result: [],
      // Here page number is for google like next page feature
      page_no: 1
    }
  },
  methods: {
    productName(product_name) {
      // Price-api URL to get data into dictionary searching product by product name
      const URL = `https://price-api.datayuge.com/api/v1/compare/search?api_key=${API_KEY}&product=${product_name}&page=${this.page_no}`;
      // REST API get call to get the data and storing the result into a search_result array
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

</style>
