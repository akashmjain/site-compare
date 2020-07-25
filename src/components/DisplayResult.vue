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

</style>
