<template>
    <h1>home</h1>

    <button @click="goToDayBook" class="btn btn-primary">Primary</button>
    <button @click="goToDayBook" class="btn btn-secondary">Secundary</button>
    <button @click="goToDayBook" class="btn btn-success">Success</button>
</template>

<script>
    export default {
        methods:{
            goToDayBook(){
                this.$router.push({name:'no-entry'});
            }
        }
    }
</script>
