import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Editor from './views/Editor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      props: true
    }
  ]
})
