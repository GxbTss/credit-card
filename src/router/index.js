import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

<<<<<<< HEAD
export default new Router({
  routes: [
=======
const CreditCard = () => import('./../components/CreditCard')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'card',
      component: CreditCard
    }
>>>>>>> slider
  ]
})
