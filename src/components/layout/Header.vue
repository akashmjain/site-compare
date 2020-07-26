<template>
    
    <div>
        <h1 class="header mb-5">Site Compare application</h1>
        
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
export default {
    
    name: "Header"
}
</script>

<style>
    .header {
        background: #343148ff;
        color: #ffffff;
        text-align: center;
        padding: 10px;
        font-size : 48px ;
		font-style : italic;
		font-variant : small-caps;
		font-family : 'Arial','sans-serif';
	}
	@media only screen and (max-width: 479px)
    {
        .header {
			font : 5px;
		}
    }
</style>
