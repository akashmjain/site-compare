<template>
    
    <div class="header">
        <h1 >Site Compare application</h1>
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
        background: black;
        color: white;
        text-align: center;
        padding: 10px;
    }
    .header a {
        color: white;
        /* padding-right: 5px; */
    }

</style>