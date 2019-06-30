import Vue from 'vue'
import Router from 'vue-router'
import dongTaiBiaoTou from '../pages/dongTaiBiaoTou/dongTaiBiaoTou'
import parent from '../pages/parent/parent.vue'
import son from '../pages/son/son.vue'
// import parent2 from '../pages/parent2/parent2.vue'
import son2 from '../pages/son2/son2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dongTaiBiaoTou',
      component: dongTaiBiaoTou
    },
    {
      path: '/parent',
      component: parent
    },
    {
      path: '/son',
      component: son
    }, 
    // {
    //   path: '/parent2',
    //   component: parent2
    // },
    {
      path: '/son2',
      component: son2
    },    
    {
      path: '/',
      redirect:'/parent'
    }
  ]
})
