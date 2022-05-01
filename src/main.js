
import Vue from 'vue'
import App from './App'
import './assets/sass/main.scss'

//FONT AWSOME STUFF
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
library.add(faStar,faThumbsUp,faThumbsDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//FONT AWSOME STUFF

//  STAR RATING
import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating );
//  STAR RATING
 
Vue.config.productionTip = false

 
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

 