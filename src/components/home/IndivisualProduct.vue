<template>
    <li class="list-group-item mr-4" >
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2 col-lg-4">
                <img :src="search_item.product_image" alt="Image not Available" width="200px" height="200pxs">
                </div>  

                <div class="search_info col-sm-8 col-lg-4">
                    <a class="h3 product-name" v-on:click.stop="doThis">{{search_item.product_title}}</a>
                    <p>{{search_item.product_id}}</p>
                </div>
            </div>
        </div>
    </li>
</template>
<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../../style/intern_project.css';
import axios from 'axios';
require('dotenv').config();


const API_KEY = process.env.VUE_APP_API_KEY;



let URL_Product = ''

export default {
    name: "IndivisualProduct",
    props: ["search_item"],
    methods: {
        doThis() {
            // fetch the data from api to show markets for indivsual element
            // console.log(this.search_item);
            console.log(process.env.VUE_APP_API_KEY);
            URL_Product =   `${this.search_item.product_link}&api_key=${API_KEY}`;

            axios.get(URL_Product).then(
                (res) => {
                    // console.log(res.data)
                    this.$router.push({ name:'Compare',params:{ data: res.data.data,  img: this.search_item.product_image, product_name: this.search_item.product_title, product_id: this.search_item.product_id } } );
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
    a:visited {
        color : #3473b6;
    }
</style>
