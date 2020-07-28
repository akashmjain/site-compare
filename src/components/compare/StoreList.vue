<template>
  <div>
    <!-- <li v-for="brand in brands" :key="brand">
        {{brand.product_store}}

    </li> -->
     <li class="list-group-item mr-4 mt-5 media " v-for="brand in brands" :key="brand.product_store">      
        <!-- {{store}} -->
        <div class="media-body flow">

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
    created() {
        
        // filter out array which are empty
        this.store_array.filter(el => {
            if(Array.isArray(el[Object.keys(el)[0]])){
                return el[Object.keys(el)[0]].length;
            }
            else if(typeof el[Object.keys(el)[0]]==="object"){
                this.brands.push(el[Object.keys(el)[0]])
                return el[Object.keys(el)[0]]
            }
        });

    }
}
</script>

<style>

</style>