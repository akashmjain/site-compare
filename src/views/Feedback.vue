<template>
	<div style="height:100vh;">	
      
    <p hidden>{{$route.params.product_id}}</p>
    <h3><center><i>This is feedback form for the product chosen</i></center></h3>

    <div class="container feedback_page"> 
      <label for="site_name">Select Site Name *</label>
      <select class="form-control" v-model="user_brand">
        <option  :value="brand.product_store" v-for="brand in brands"  :key=brand>
          {{brand.product_store}}
        
        </option>
      </select>
      <div style="margin-top:2%;">
        <label for="rating">Rating(1 to 5) *</label>
        <select class="rounded rating" v-model="user_rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

        </select>
      </div>
      <div>
        <label for="name">Name *</label>
        <input class="form-control" v-model="user_name" type="text" >
        
      </div>
      <div>
        <label for="comment">Comment</label>
        <textarea class="form-control" v-model="user_comments"></textarea>
      </div>
      <button class="mt-5 btn-primary" v-on:click="saveCommentToDatabase()">Send Comment</button>
    </div>
    

  </div>
</template>

<script>
import axios from 'axios'
import '../style/intern_project.css';

export default {
  
  name: "Feedback",
  data() {
    return {
      brands: [],
      user_rating: 0,
      user_brand: '',
      
    }
  },
 
  methods: {
    getRating(rate) {
      this.rating = rate;
      console.log(rate)
      return rate
    },
    saveCommentToDatabase() {

      console.log(this.$route.params.product_id);

      console.log(this.user_name);
      console.log(this.user_comments);
      console.log(this.user_brand)
      console.log(this.user_rating);
      
      if(this.user_name === undefined && this.user_brand === undefined && this.user_rating === undefined && this.$route.params.product_id === undefined)
      {
        alert('Product is not chosen or required elements are empty');
        return;
      }
    

      const url = 'http://localhost:5000/api/comments';

      // sent data to database
      axios.post(url, {
          product_key: this.$route.params.product_id,
          comment: this.user_comments,
          product_rating: this.user_rating,
          user_name: this.user_name,
          merchant_website: this.user_brand
      });


      // after done go to main page
      this.$router.go(-2)
      
    },
  
    
  },
  created() {
    this.$route.params.data.filter(el => {
      if(Array.isArray(el[Object.keys(el)[0]])){
          return el[Object.keys(el)[0]].length;
      }
      else if(typeof el[Object.keys(el)[0]]==="object"){
          this.brands.push(el[Object.keys(el)[0]])
        return el[Object.keys(el)[0]]
      }
      }); 



  },  

}

</script>

<style scoped>
	label {
		color : #ffffff;
	}
	.rating {
		width : 4rem;
	}
</style>
