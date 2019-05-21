import Vue from 'vue'

// import fontawesome lib
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add fontawesome icons
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
