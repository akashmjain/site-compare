<template>
    
    <div>
        <!-- assigning data of routes to veriable for data manipulation -->
        <p hidden> {{userData = $route.params.data}}</p>
        <!-- printing that data in graphical form -->
        <p>{{userData}}</p>
    </div>

</template>
<script>
export default {
    name: "Compare",
    data() {
        return {
            userData: []
        }
    },
    
}
</script>
<style scoped>

</style>