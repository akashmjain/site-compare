<template>
    
    <div>
        <!-- assigning data of routes to veriable for data manipulation. hidden vecause it will show data on to a page otherwise -->
        <p hidden> {{userData = $route.params.data}}</p>
        <!-- printing that data in graphical form -->

        <!-- Show which product is in question -->
        

        <div class="media component mt-5 ml-5">
            <img class="mr-3" :src=$route.params.img alt="Generic placeholder image">
             <div class="media-body">
                 <h3 class="mt-0">{{$route.params.product_name}}</h3>
                 <p>{{ $route.params.product_id}}</p>
            </div> 
        </div> 
        <!-- Show Store only if link is available for that store -->

        <ul v-for="store in userData.stores" v-bind:key="store.name" class="list-unstyled" >
            <li class="list-group-item mr-4 mt-5 media" v-if="resultData(store)">
                <img class="mr-3" :src=store[brand].product_store_logo alt="Generic placeholder image">
                <!-- {{store}} -->
                <div class="media-body">
                     <!-- <a :href=store[brand].product_store_url class="btn-primary">Visit</a>  -->
              
                </div>
            </li>
        </ul>


    </div>

</template>
<script>
export default {
    name: "Compare",
    data() {
        return {
            userData: [],
            brand: ''
        }
    },
    methods: {
        resultData(store) {
            // for loop for checking if store contains any data or not
            for ( this.brand in store)
            {
                if (store[this.brand].length === 0) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    }
    
}
</script>
<style scoped>

</style>