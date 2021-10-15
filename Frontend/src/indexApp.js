import vue from "vue";
import App from './app/components/App.vue'
import vuelidate from "vuelidate";
import router from './router'


// Bootstrap Vue Add
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { VBScrollspy } from 'bootstrap-vue'
// Note: Vue automatically prefixes the directive name with 'v-'
Vue.directive('b-scrollspy', VBScrollspy)

// Main CSS Add
import './assets/app.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import { BIcon } from 'bootstrap-vue'
Vue.component('b-icon', BIcon)

Vue.config.productionTip = false

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')



vue.use(vuelidate);

export default router