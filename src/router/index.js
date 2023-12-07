import Vue from 'vue'
import VueRouter from 'vue-router'

import homePage from '@/views/home/homePage'
import clubList from '@/views/List/clubList'
import clubMien from '@/views/Mien/clubMein.vue'
import clubRecruit from '@/views/Recruit/clubRecruit'
import clubActivity from '@/views/Activity/clubActivity'
import userCenter from '@/views/user/userCenter'
import login from '@/views/user/login.vue'

Vue.use(VueRouter)
//防止重复点击报错
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originPush.call(this, location).catch(err => err);
}

const routes = [
  {
    path: '/',
    redirect: '/homePage'

  },
  {
    name: 'homePage',
    path: '/homePage',
    component: homePage,
    props($route) {
      return { ...$route.params }
    }
  },
  {
    name: 'clubList',
    path: '/clubList',
    component: clubList
  },
  {
    name: 'clubMien',
    path: '/clubMien',
    component: clubMien
  },
  {
    name: 'clubRecruit',
    path: '/clubRecruit',
    component: clubRecruit

  },
  {
    name: 'clubActivity',
    path: '/clubActivity',
    component: clubActivity
  },
  {
    name: 'userCenter',
    path: '/userCenter',
    component: userCenter,
    meta: { isAuth: true },
  },
  {
    name: 'login',
    path: "/login",
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  // if (to.path == '/Home/Message' || to.path == '/Home/News') 路径写法，如果需要判断的路由很多，不方便
  // if (to.meta.isAuth) 路由配置项，是否鉴权
  if (to.meta.isAuth) {
    if (localStorage.getItem('isAuth') === 'true') {
      next()
    } else {
      alert('未登录,请登入后查看')
    }
  } else {
    next()
  }
})
export default router
