<template>
    
    <div class="header">
        <h1 >Price Comparison Site</h1>
        <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
        
        </div>
    </div>
</template>
<script>
export default {
    
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: #343148ff;
        color: #ffffff;
        text-align: center;
        padding: 10px;
	}
	.header h1 {
			font-size : 48px ;
			font-style : italic;
			font-variant : small-caps;
			font-family : 'Arial','sans-serif';	
	}
	.header a{
		color : #ffffff;
	}
	@media only screen and (max-width: 479px)
	{
		.header h1{
			font : 5px;
		}
	}
</style>
