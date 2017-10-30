import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Resume from '@/components/resume'
import Index from '@/components/index'
import Email from '@/components/email'
import Person from '@/components/person'
import Phone from '@/components/phone'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  ,
    children:[
    {
      path: 'email',
      name: 'email',
      component: Email
    },
    {
      path: 'person',
      name: 'person',
      component: Person
    },
    {
      path: 'phone',
      name: 'phone',
      component: Phone
    }
  ]}]
})
