<template>
    
    <div class="header">
        <h1>Price Comparison Site</h1>
        <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link> |
        <router-link to="/contactUs">Contact Us</router-link> |
        <router-link to="/feedback">Feedback</router-link>
        
        </div>
    </div>
</template>
<script>
export default {
    
    name: "Header"
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Almendra+SC&display=swap');
    .header {
        background: #343148ff;
        color: #ffffff;
        text-align: center;
        padding: 10px;
	}
	.header h1 {
			font-size : 55px ;
			font-family : 'Almendra SC','Arial','sans-serif';	
	}
	.header a{
		color : #ffffff;
		font-size : 1.2rem;
	}
	.header a:hover, a.router-link-exact-active {
		color : #ffc832;
	}
	@media only screen and (max-width: 479px)
	{
		.header h1{
			font : 5px;
		}
	}
</style>
