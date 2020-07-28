<template>
  <div>
    <!-- <li v-for="brand in brands" :key="brand">
        {{brand.product_store}}

    </li> -->
     <li class="list-group-item ml-3 " v-for="brand in brands" :key="brand.product_store">      
        <!-- {{store}} -->
        <div class="media-body" id="delete_after_use">

                <p class="h5">{{brand.product_store}}</p>
                <p class="h6">MRP : {{brand.product_price}}</p>
                <a :href=brand.product_store_url target="_blank" class="btn btn-primary">Visit</a> 
        </div>
    </li>
  </div>
</template>

<script>
export default {
    name: "StoreList",
    props: ["store_array"],
    data() {
        return {
            brands: [],
        }
    },
    activated() {
        console.log('activated');
        
        // filter out array which are empty
        this.$route.params.data.stores.filter(el => {
            if(Array.isArray(el[Object.keys(el)[0]])){
                return el[Object.keys(el)[0]].length;
            }
            else if(typeof el[Object.keys(el)[0]]==="object"){
                this.brands.push(el[Object.keys(el)[0]])
                return el[Object.keys(el)[0]]
            }
        });
    },
    deactivated() {
        console.log('deactivated');
        // let element = document.getElementById('delete_after_use');
        console.log(document);

        // console.log(element);
        // element.parentNode.removeChild(element);
    }
}
</script>

<style>

</style>