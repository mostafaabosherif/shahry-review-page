<template>
    <div class="review-grid container"> 
        <slot>
        </slot>
    
    </div>
</template>

<script>
    // import Review from './Review.vue';

    export default {
        // props: ['quotes'],
        components: {
            // appReview: Review
        },
        methods: {
           
        }
    }
</script>

<style lang="scss" scoped>
.review-grid{
    margin-top:-20%;
    z-index: 10;
    position: relative;
    @media screen and (max-height:650px){
          
       margin-top:-14%;   
       z-index: 10;
  }
    @media screen and (max-width:850px){
          
       margin-top:-40%;   
       z-index: 10;
  }

  @media screen and (max-width:767px){
       margin-top:-55%;
          z-index: 10;
     
  }
}

</style>