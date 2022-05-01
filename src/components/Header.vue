<template>

  <header class="container header"> 
      <div class="header__content">  
            <a href="https://shahry.app/" class="header__logo">
                <img src="../assets/images/logo.svg" alt="Logo"/>
            </a> 
            <figure class="header__user">
                <img src="../assets/images/users/1.jpg" alt="user" class="header__user-img circle">
                <figcaption class="header__user-name main-heading grey-dark">Khaled Mohamed</figcaption>
            </figure>  
      </div> 
  </header>

</template>
<script>
export default {
  // props: ['quoteCount', 'maxQuotes']
};
</script>


<style scoped lang='scss'>

 .header{
     background-color: white;
     padding: 2rem;
    //  position: fixed;
    //  inset: 0 0 0 0;
     &__content{
         display: flex;
         justify-content: space-between;
         align-items: center;
     }
     &__user{
         display: flex;
         justify-content: center;
         align-items: center;
         &-img{
             width: 4rem;
             margin-inline-end: 1rem;
         }
     }
 }
</style>