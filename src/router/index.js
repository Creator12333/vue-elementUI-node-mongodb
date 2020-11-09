import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from '../views/ListArticle.vue'
import CreateArticle from '../views/CreateArticle.vue'
import EditArticle from '../views/EditArticle.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    name: 'List-Articles ',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'Create-Articles ',
    component: CreateArticle
  },
  {
    path: '/articles/edit/:id',
    name: 'Edit-Articles ',
    component: EditArticle
  }

]

const router = new VueRouter({
  routes
})

export default router
