<template>
    <div class="pt-4">
        <!-- <p class="pt-2">{{search_result}}</p> -->
        <!-- Indivisual search component  -->
        <ul v-bind:key="search_item.product_title" v-for="search_item in search_result">
            <IndivisualProduct v-bind:search_item="search_item"/>

        </ul>
    </div>

</template>
<script>
import IndivisualProduct from './IndivisualProduct'

export default {
    name: "DisplayResult",
    components: {
        IndivisualProduct
    },
    props: ["search_result"],
    methods: {
        
    }
}
</script>
<style scoped>

</style>
