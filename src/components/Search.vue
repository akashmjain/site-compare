<template>
    <div>
        <div class="text-center h-50">
            <input type="text" placeholder="Search an item" v-model="product_name" class="mr-3 w-50 h-50">
            <button v-on:click="getProductInformation" class="btn-info ">Search</button>
        </div>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
export default {
    name: "Search",
    data() {
        return {
            product_name: ''
        }
    },
    methods: {
        getProductInformation() {
            this.$emit('search-param', this.product_name);
            // console.log(this.product_name);
        },
    }
}
</script>
<style scoped>

</style>
