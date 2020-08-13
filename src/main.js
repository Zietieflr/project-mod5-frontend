import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNativeNotification from 'vue-native-notification'
import VueSwal from 'vue-swal'


library.add(faPlay, faPlus, faTrashAlt)
Vue.use(VueNativeNotification, {requestOnNotify: true})
Vue.use(VueSwal)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

