import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Router from 'vue-router'
import oauth from '@/components/oauth'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'oauth',
      component: oauth
    },
    {
      path: '/main',
      name: 'main',
      component: main,
	  meta: {
	            requiresAuth: true
	        }
    }
  ]
})
