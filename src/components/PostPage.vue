<template>
    <div>
        Post {{id}}
        
        Query params:<br>
        Q:{{$route.query.q}} <br>
        name:{{$route.query.name}}
    </div>
</template>

<script>
export default {
    //  data(){
    //     return{
    //     id:this.$route.params.id
    //     }
    // }
    props: ["id"]
}
</script>


