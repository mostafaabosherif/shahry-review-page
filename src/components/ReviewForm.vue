<template>
        <form action="" class="review-form">
                <div class="review-form-content">
                <h3 class="review-form-content__title medium main-heading">
                    ADD A REVIEW
                </h3>
                <div class="review-form-content__form-group">
                    <p class="review-form-content__form-group-title">
                        RATING
                    </p>
                    <div class="review-form-content__rating-stars ">
                         <star-rating v-model="ratingData.rating"            
                                             v-bind:increment="1"
                                                v-bind:star-size="16"
                                                :animate="false"
                                                v-bind:max-rating="5"
                                                :border-width='1'
                                                 border-color="#ccc"
                                                inactive-color="#ccc"
                                                :show-rating='true'
                                                active-color="#FDCC0D"
                                                active-border-color="#FDCC0D" 
                                            :padding="2"
                                            :read-only="false"
                                            :rounded-corners="true">
                    </star-rating>
                    </div>
                </div>
                <div class="review-form-content__form-group">
                    <label for="review-title"  class="review-form-content__form-group-title">
                        REVIEW TITLE
                    </label>
                    <input type="text" id="review-title"  v-model="ratingData.reviewTitle" class="review-form-content__form-group-input" required> 
                </div>
                <div class="review-form-content__form-group">       
                    <label for="review-details"  class="review-form-content__form-group-title">
                        REVIEW DETAILS
                    </label>
                    <input type="text"   v-model="ratingData.reviewDetails" id="review-details" class="review-form-content__form-group-input" required> 
                </div> 
                
                <div class="alert" v-if="!formValid">
                        Please fill the missing fields
                </div>
                <div class="review-form-content__btn-container">
                    <button class="btn btn--green btn--animated" @click.prevent="addNewReview">
                        ADD REVIEW
                    </button>
                </div>
                <button class="review-form-content__close" @click.prevent="closeReviewForm">
                        &times;
                </button>

               
                </div>
        </form>
            
            
</template>

<script>
 
    export default {
        data: function() {
            return {
               ratingData:{
                   rating:null,
                   reviewTitle:null,
                   reviewDetails:null
               },
               formValid:true 
            };
        },
        methods: {
            closeReviewForm() {
                this.$emit('closeForm'); 
            },
            addNewReview(){
                 
                 
                  if(this.ratingData.rating!==null && this.ratingData.reviewTitle!==null && this.ratingData.reviewDetails!==null){ 
                     this.$emit('addingRating', this.ratingData);
                        this.dataValid=true
                }
                else{
                    this.formValid=false
                     
                }

            },
        
        }
    }
</script>


<style scoped lang='scss'>
 .review-form{
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: rgba($color: #000000, $alpha: .3);
        position: fixed;
        top:0;
        height: 100vh;
        width: 100%;
        z-index: 100;
     &-content{
         width: 50vw;
        background-color: white;
        padding: 2rem;    
        border-radius: 5px;
        position: relative;
         @media screen and (max-width:850px){
         width: 85vw;
       
  }
  @media screen and (max-width:767px){
         width: 95vw;
     
  }
        &__title{margin-bottom: 2rem;}
        &__form-group{
            margin-bottom: 1.5rem;
            &-title{
                display: block;margin-bottom: .5rem;
                color: var(--grey-dark);
                font-weight: var(--medium-font);

            }
            &-input{
               width: 100%;
               background-color: #f0f0f0;
               border: 1px solid rgb(241, 241, 241);
               padding: .5rem 0;
               border-radius: 4px;
            }
        }
        &__btn-container{
            display: flex;
            justify-content: flex-end;
            padding-top: 1rem;
             border-top: 1px solid rgb(241, 241, 241);
            .btn--green{
                font-size: 1rem;
                padding: 1rem 3rem;
            }
        }
        &__close{
            position: absolute;
            top: 0rem;
            right: 1rem;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 3rem;
            color: var(--grey-light);
            transition: all .2s ease;
            cursor: pointer;
            &:hover{
                color: red;
            }
        }
     
     }
 }
  #review-details{  height: 7rem; }
  #review-title{height: 4rem;}

  .alert{
    color: red;
    font-size:1.3rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1rem;
}
      
       
</style>