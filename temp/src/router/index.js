import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import bank from '@/page/bank'
import menu from '@/page/menu'
import my from '@/page/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path:'/home',name: 'home',component: home},
        {path:'/bank',name: 'bank',component: bank},
        {path:'/menu',name: 'menu',component: menu},
        {path:'/my',name: 'my',component: my},
      ]
    }
  ]
})
