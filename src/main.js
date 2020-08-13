import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueNativeNotification from 'vue-native-notification'

library.add(faPlay, faPlus, faTrashAlt)

Vue.use(VueNativeNotification, {
  // Automatic permission request before
    // showing notification (default: true)
    requestOnNotify: true
  })

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

