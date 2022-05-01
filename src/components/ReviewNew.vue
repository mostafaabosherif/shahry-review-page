<template>
    <section class="review-new">
            <div class="review-new__text-box">
                <h1 class="heading-big white bold center-text">
                    WHAT OUR USERS SAY ABOUT SHAHRY ?
                </h1>
                 <button class="btn btn--white btn--animated" @click="showReviewForm">
                     ADD A REVIEW
                 </button>
            </div> 
    </section>
</template>

<script>
 
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods: {
            showReviewForm() {
                this.$emit('addNewReview'); 
            }
        }
    }
</script>

<style lang="scss" scoped>
.review-new{
     background-image: linear-gradient(rgba(#000000, .4)),
    url(../assets/images/backgrounds/bg-2.jpg);
    background-size: cover;
    background-position: center;
    position: relative;
    height: 75vh;
    display: flex; 
   justify-content: center;
   align-items: center;
    position: relative;
    z-index: 0;
//    z-index: -1;
    &__text-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        h1{
            margin-bottom: 2rem;
            text-shadow:2px 2px 5px rgba(#000000, .4);
        }
    }

}
</style>