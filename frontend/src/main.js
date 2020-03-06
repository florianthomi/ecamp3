import Vue from 'vue'
import App from './App.vue'
import '@/auth'
import router from '@/router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.component('empty-layout', () => import('./layouts/EmptyLayout'))
Vue.component('default-layout', () => import('./layouts/DefaultLayout'))
Vue.component('camp-layout', () => import('./layouts/CampLayout'))
Vue.filter('loading', function (value, loadingState, isLoading = v => typeof v === 'function' && v.loading) {
  if (typeof value === 'function' && !value.loading) {
    // Wrap the function that is passed into the | loading filter
    return (v, ...args) => isLoading(v) ? loadingState : value(v, ...args)
  }
  return isLoading(value) ? loadingState : value
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
