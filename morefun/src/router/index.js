import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/dog',
      name: 'Dog',
      component: Dog
    },
    {
      path: '/cat',
      name: 'Cat',
      component: Cat
    },
    {
      path: '/jokes',
      name: 'Jokes',
      component: Jokes
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
  ]
})
