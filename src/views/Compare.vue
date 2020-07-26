<template>
    
    <div>
        <p>{{ userData}}</p>
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
    created() {
        this.userData = this.$route.params.data;
        console.log(this.userData)
    }
}
</script>
<style scoped>

</style>