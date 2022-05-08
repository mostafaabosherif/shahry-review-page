<template>
  <div class="review-card">
    <figure class="review-card__user">
      <img :src="review.img" alt="user" class="review-card__user-img circle" />

      <!-- {{review.img}} -->
      <figcaption class="review-card__user-name main-heading blue">
        {{ review.name }}
      </figcaption>
    </figure>
    <h4 class="review-card__date grey-light regular text-sub regular">
      {{ review.date }}
    </h4>
    <h3 class="review-card__title sub-heading grey-dark regular">
      {{ review.title }}
    </h3>
    <div class="review-card__rating">
      <div  v-if="review.rating >= 4" class="review-card__rating-thumb review-card__rating-thumb--up">
        <font-awesome-icon  icon="fa-solid fa-thumbs-up" class="fa-3x" />
      </div>
      <div   v-else class="review-card__rating-thumb review-card__rating-thumb--down">
            <font-awesome-icon  icon="fa-solid fa-thumbs-down" class="fa-3x fa-thumbs-down" />
      </div>
      <div class="review-card__rating-stars">
        <star-rating
          v-model="review.rating"
          @rating-selected="setRating"
          v-bind:increment="1"
          v-bind:star-size="16"
          :animate="false"
          v-bind:max-rating="5"
          :border-width="1"
          border-color="#ccc"
          inactive-color="#ccc"
          :show-rating="true"
          active-color="#FDCC0D"
          active-border-color="#FDCC0D"
          :rounded-corners="true"
          :padding="2"
          :read-only="true"
        >
        </star-rating>
      </div>
    </div>
    <p class="review-card__description regular text-sub grey-dark ">
      {{ review.description }}
    </p>
    <form action="" class="review-card__form">
      <div class="review-card__form-group">
        <label for="user-comment" class="review-card__form-group-title">
          YOUR COMMENT
        </label>
        <input required
          type="text"
          class="review-card__form-group-input" v-model="userComment"
        />
        <!-- <div class="alert" v-if="!dataValid">
                    Please enter valid Data
        </div> -->
      </div>
    </form>
    <div class="review-card__comment"
      v-if="review.comment">
    <div 
      v-for="item in review.comment"
      :key="item.comment"
    >
      <div class="review-card__comment-group">
        <p class="review-card__comment-group-input">
          {{ item.description }}
          <!-- {{review.comment}} -->
        </p>
        <img
          :src="item.img"
          alt="comment user"
          class="review-card__comment-group-img circle"
        />
      </div>
    </div>
    </div>
    <button class="btn btn--green btn--animated" @click.prevent="addComment()">
      ADD COMMENT
    </button>
 
  </div>
</template>
<script>
export default {
  data: function() {
    return { 
      userComment:null,
      dataValid:true
    };
  },
  methods: {
    setRating(rating) {
      console.log(rating);
    },
    addComment(){
            if(this.userComment!==null){
              this.$emit('addComment', {id:this.review.id,userComment:this.userComment});
                this.dataValid=true
                }
                else{
                    this.dataValid=false
                     
                }

              
    }
  },
  components: {},
  props: ["review"],
 
};
</script>
<style scoped lang="scss">
.review-card {
  width: 64%;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 2rem 3rem;
  //  margin-top: -10%;
  //  z-index: 10;
  background-color: white;
  @media screen and (max-width:850px){
         width: 85%;
         padding: 2rem;
  }
  @media screen and (max-width:767px){
         width: 95%;
         padding: 2rem;
  }
  &:hover{
     .review-card__form {
    width: 90%;
     height: 120PX;
    overflow: visible;
    }
  }
  & > * {
    margin-bottom: 0.5rem;
  }
  &__user {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -7rem;
    &-img {
      width: 8rem;
    }
  }

  &__description {
    width: 90%;
    // text-align: left;
    font-size: 1.4rem;
    line-height: 1.3;
    margin-bottom: 2rem;
  }

  &__rating {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    &-stars {
      border: 1px solid rgb(241, 241, 241);
      padding: 0.5rem 1rem;
      align-self: stretch;
      border-left: none;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-inline-start: 1rem;
      }
    }
    &-thumb {
      //   width:2rem;

      padding: 1.2rem 1.8rem;
      //   height: 2rem;
      &--up {
        background-color: #2dc42d;
      }
      &--down {
        background-color: red;
      }
    }
  }

  &__form {
    width: 90%;
    height: 0PX;
    overflow: hidden;
    transition: all .3s ease;
    &-group {
      margin-bottom: 1.5rem;
      &-title {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--grey-dark);
        font-weight: var(--medium-font);
      }
      &-input {
        width: 100%;
        background-color: #f0f0f0;
        border: 1px solid rgb(241, 241, 241);
        padding: 0.5rem 0;
        border-radius: 4px;
        height: 10rem;
      }
    }
  }
  &__comment {
    width: 90%;
    margin-bottom: 0rem;
    margin-top: 3rem;
    &-group {
      margin-bottom: 4rem;
      position: relative;
      &-img {
        width: 5rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }
      &-input {
        width: 100%;
        background-color: #f0f0f0;
        border: 1px solid rgb(241, 241, 241);
        padding: 1.5rem;
        border-radius: 4px;
        //    height: 10rem;
        font-size: 1.4rem;
        line-height: 1.3;
        margin-bottom: 2rem;
        padding-bottom: 4rem;
  //       @media screen and (min-width:1920px){
  //         margin-top: 2rem;
     
  // }
      }
    }
  }
}
.fa-thumbs-up,
.fa-thumbs-down {
  height: 2rem;
  path {
    fill: white;
  }
}
.vue-star-rating-rating-text {
  margin-left: 2.5rem;
}
.alert{
    color: red;
    font-size:1.3rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
}
</style>
