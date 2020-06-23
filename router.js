import Vue from 'vue'
import Router from 'vue-router'
import Posts from '~/pages/posts'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/posts',
        name: 'posts',
        component: Posts
      }
    ]
  })
}