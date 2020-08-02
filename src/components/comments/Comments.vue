<template>
    <div>
<!--         
        <ul>
            <li :key="comment.product_key" v-for="comment in all_comments">
                <p v-if="getData(comment)" >{{comment}}</p>
            </li>
        </ul> -->
        {{getData()}}
        <br/>
        <!-- {{ind_com}} -->
        
    </div>

</template>

<script>
export default {
    name: "Comments",
    props: ["all_comments", "product_key"],

    created() {
        console.log('activated');
        console.log(this.product_key);

        this.all_comments.filter(el => {
            if (el.product_key === this.product_key ){
                console.log('true');
                this.ind_com.push(el)
            }
        })
    },
    data() {
        return {
            
        }
    },
    methods: {
        getData() {
            return this.all_comments.filter( el => {
                if(el.product_key === this.product_key) 
                {
                    return el;
                }
            })
        }
    },
    
   

}
</script>

<style>

</style>