import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Dog from '@/components/Dog'
import Cat from '@/components/Cat'
import News from '@/components/News'
import Jokes from '@/components/Jokes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
          path: 'news',
          component: News
        },
      ]
    }
  ]
})
