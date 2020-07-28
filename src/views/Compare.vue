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
            
            <ul class="list-unstyled">
                <!-- <StoreList v-bind:store_array="userData.stores"/> -->
                <StoreList v-bind:data="userData.stores"/>
            </ul>
		</div>
	</div>
    </div>

</template>
<script>
import '../style/intern_project.css';
import StoreList from '../components/compare/StoreList'
export default {
    name: "Compare",
    components: {
        StoreList
    },
    data() {
        return {
            userData: [],
            brand: ''
        }
    }
}
</script>
<style scoped>
	
</style>
