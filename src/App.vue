<template>
    <main class="main">
        <app-header></app-header>
        <app-review-new 
                @addNewReview="showReviewForm=true">
        </app-review-new>
        <app-review-grid>
                <app-review 
                    v-for="review in reviewsList" 
                    :review="review" 
                    @addComment="addComment($event)" 
                    :key="review.id"> 
                </app-review>
        </app-review-grid> 
        <app-review-form 
            v-if="showReviewForm"  
            @closeForm="showReviewForm=false" 
            @addingRating="addRatingData($event)"> 
        </app-review-form> 
    </main>
</template>

<script>
    import ReviewGrid from './components/ReviewGrid.vue';
    import ReviewNew from './components/ReviewNew.vue';
    import Header from './components/Header.vue';
    import Review from './components/Review.vue';
    import ReviewForm from './components/ReviewForm.vue';
    import jsonData from './reviews.json' 
    import jsonUserData from './user.json' 

    export default {
        data: function () {
            return {
                reviewsList:jsonData,
                showReviewForm:false,
                userData:jsonUserData, 
            }
        },
        methods: {
            addRatingData(data){
                this.showReviewForm=false 
                const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                date.toLocaleDateString('en-EG', options) 
                     let userUpdate = {
                            id:this.reviewsList.length+1,
                            img:"/static/assets/images/users/1.jpg",
                            nam:"Khaled Mohamed",
                            title:data.reviewTitle,
                            date:date.toLocaleDateString('en-EG', options),
                            rating:data.rating,
                            description:data.reviewDetails,
                            comment:[]
                     } 
                    this.reviewsList.push(userUpdate);  
            },
            addComment(comment){ 
                    let newItem =this.reviewsList[comment.id -1] 

                    let commentD= {
                            img:this.userData[0].img,
                            description:comment.userComment
                    }
                   
                    newItem.comment.push(commentD) 
                 
            }
            },
        components: {
            appReviewGrid: ReviewGrid,
            appReviewNew: ReviewNew,
            appHeader: Header,
            appReviewForm: ReviewForm,
            appReview: Review,
        }
        
    }
</script>

<style lang='scss'>
.main{
    position: relative;
}
</style>