<template>
    
    <div>
        <!-- assigning data of routes to variable for data manipulation. hidden because it will show data on to a page otherwise -->
        <p hidden> {{userData = $route.params.data}}</p>
        <!-- printing that data in graphical form -->

        <!-- Show which product is in question -->
        

        <div class="media component mt-4">
            <img class="img-responsive mr-5" :src=$route.params.img alt="Generic placeholder image">
             <div class="media-body">
                 <h3 class="col-lg-11 mt-0">{{$route.params.product_name}}</h3>
                 <h5 class="col-8"><i>Product Availability :</i></h5>
            
        <!-- Show Store only if link is available for that store -->

        <ul v-for="store in userData.stores" v-bind:key="store.name" class="list-unstyled" >
            <li class="list-group-item ml-3" v-if="resultData(store)">
				Site Name : {{store[brand].product_store}}<br>
				MRP : {{store[brand].product_price}}<br>
                <!-- {{store}} -->
                
                     <a :href=store[brand].product_store_url>Visit</a>
             </li>
        </ul>
		</div>
	</div>
    </div>

</template>
<script>
import '../style/intern_project.css';
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
