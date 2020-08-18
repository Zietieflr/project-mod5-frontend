import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNativeNotification from 'vue-native-notification'
import VueSwal from 'vue-swal'
import { 
  faPlay, 
  faPlus,
  faMinus,
  faMinusCircle,
  faTrashAlt, 
  faHistory, 
  faSignInAlt, 
  faSignOutAlt,
  faEye,
  faSyncAlt,
  faBars
} from '@fortawesome/free-solid-svg-icons'


library.add(faPlay, faPlus, faMinus, faMinusCircle, faTrashAlt, faHistory, faSignInAlt, faSignOutAlt, faEye, faSyncAlt, faBars)
Vue.use(VueNativeNotification, {requestOnNotify: true})
Vue.use(VueSwal)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

