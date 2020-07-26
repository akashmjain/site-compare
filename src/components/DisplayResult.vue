<template>
    <div class="pt-4">
        <!-- <p class="pt-2">{{search_result}}</p> -->
        <ul v-bind:key="search_item.product_title" v-for="search_item in search_result">

            <li class="list-group-item" >
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2">
                        <img :src="search_item.product_image" width="200" height="200">
                        </div>  

                        <div class="col-8">
                            <h6>{{search_item.product_title}}</h6>
                            <p>{{search_item.product_id}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>


    </div>

</template>
<script>
export default {
    name: "DisplayResult",
    props: ["search_result"],
    
}
</script>
<style scoped>
    @media only screen and (max-width: 1280px)

	{

		.search_info {
			padding-left : 10%;
		}

	}
	@media only screen and (max-width: 1024px)

	{

		.search_info {
			margin-left : 10%;
		}

	}
	@media only screen and (max-width: 959px)

	{

		.search_info {
			padding-left : 10%;
		}

	}
	@media only screen and (max-width: 768px)

	{

		.search_info {
			padding-left : 14%;
		}

	}
	@media only screen and (max-width: 699px)

	{

		.search_info {
			padding-left : 19%;
		}

	}
	@media only screen and (max-width: 635px)

	{

		.search_info {
			padding-left : 30%;
		}

	}
	@media only screen and (max-width: 539px)

	{

		.search_info {
			padding-left : 38%;
		}

	}
	@media only screen and (max-width: 479px)

	{

		.search_info {
			padding-left : 40%;
		}

	}
	@media only screen and (max-width: 459px)

	{

		.container-fluid div {
			display : block
		}
		.search_info {
			padding-left : 0;
			padding-top : 2%;
		}

	}
	@media only screen and (max-width: 360px)

	{
		.image {
			padding : 1%;
		}
	}
</style>
