<template>
    <li class="list-group-item" >
        <div class="container-fluid">
            <div class="row">
                <div class="col-4">
                <img :src="search_item.product_image" width="200" height="200">
                </div>  

                <div class="col-4">
                    <a class="h3 product-name" v-on:click.stop="doThis">{{search_item.product_title}}</a>
                    <!-- <router-link>{{search_item.product_title}}</router-link> -->
                    <p>{{search_item.product_id}}</p>
                </div>
            </div>
        </div>
    </li>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
const API_KEY = 'dZBL0jdoxGMgGcOxH7Os6SKMgoa9WqUACR3';
let URL_Product = ''

export default {
    name: "IndivisualProduct",
    props: ["search_item"],
    methods: {
        doThis() {
            // fetch the data from api to show markets for indivsual element
            // console.log(this.search_item);
            URL_Product =   `${this.search_item.product_link}&api_key=${API_KEY}`;

            axios.get(URL_Product).then(
                (res) => {
                    // console.log(res.data)
                    this.$router.push({ name:'Compare',params:{ data: res } } );
                }).catch( err => console.log(err));  

            

        }
    }
}
</script>
<style scoped>
    .product-name {
        color: gray;
    }
    .product-name:hover {
        cursor: pointer;
        color: black;
    }
</style>
