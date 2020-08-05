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
	<div style="text-align:center" class="mt-5">
		<button v-on:click="gotoFeedback" class="btn-info">Provide Feedback</button>
	</div>
    	<div class="mt-5">
		<Comments v-bind:ind_comment="ind_comment" v-bind:all_comments="all_comments" v-bind:product_key="this.$route.params.product_id"/>
        </div>
    </div>

</template>
<script>
import '../style/intern_project.css';
import StoreList from '../components/compare/StoreList';
// import CommentService from '../CommentService';
import axios from 'axios';
import Comments from '../components/comments/Comments'

export default {
    name: "Compare",
    components: {
        StoreList,
        Comments
    },
    data() {
        return {
            userData: [],
            brand: '',
            all_comments: [],
            error: '',
            ind_comment: []
            
        }
    },
    async created() {
        try {
            // this.comments = await CommentService.getComments();
            // getting comments in json format and storing those in comments array
            const url = 'http://localhost:5000/api/comments';
            axios.get(url)
                .then( res => this.all_comments = res.data)
                .catch( err => this.error = err.message) 
        } catch (err) {
            this.error = err.message;
        }
        console.log(this.all_comments)
        this.ind_comment = this.all_comments.filter((element) => {
            if(element.product_id === this.$route.params.product_id )
            {
                console.log(element);
                return element;
            }
        })  
        
    }
    ,
    methods: {
        gotoFeedback() {
            
            this.$router.push({name : 'Feedback', params: {data: this.userData.stores, product_id: this.$route.params.product_id}})  
        }
    },
    
}
</script>
<style scoped>
	
</style>
