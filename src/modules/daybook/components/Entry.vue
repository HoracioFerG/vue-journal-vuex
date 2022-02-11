<template>
    <div 
        class="entry-container mb-3 pointer p-2" 
        @click="$router.push({name: 'entry',params: {id:10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Febrero</span>
            <span class="mx-2 fw-light">2022</span>
        </div>

        <div class="entry-description">
            Non elit elit cupidatat ipsum id. Dolor irure adipisicing fugiat et sint. Excepteur non eiusmod cillum proident tempor enim. Qui ipsum veniam dolor amet mollit fugiat ad est velit in dolor pariatur dolore officia. Ullamco incididunt quis est culpa qui mollit voluptate nostrud eu.            
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        
        &:hover{
            background-color: lighten($color: grey, $amount: 45 );
            transition: 0.2s all ease-in;
        }

        .entry-description{
            font-size: 12px;
        }
    }

    

    
</style>