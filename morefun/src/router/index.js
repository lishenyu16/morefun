import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Dog from '@/components/Dog'
import Cat from '@/components/Cat'
import USNews from '@/components/USNews'
import CNNews from '@/components/CNNews'
import Jokes from '@/components/Jokes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/main/',
      component: Main,
      children:[
        {
          // https://router.vuejs.org/guide/essentials/nested-routes.html
          path: 'dog',
          component: Dog
        },
        {
          path: 'cat',
          component: Cat
        },
        {
          path: 'jokes',
          component: Jokes
        },
        {
          path: 'usnews',
          component: USNews
        },
        {
          path: 'cnnews',
          component: CNNews
        },
      ]
    }
  ]
})
