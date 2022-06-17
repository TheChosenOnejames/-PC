/*
 * @Date: 2022-06-08 08:55:57
 * @LastEditors: shen-xu
 * @LastEditTime: 2022-06-16 15:09:12
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
// 默认就会去 login 目录, 找index.vue(可以省略) (如果是页面大写, 需要写全)

import Login from "@/views/login";
import Layout from "@/views/layout";
import page404 from '@/views/page404/index.vue';
import backlog from '@/views/backlog/index.vue'
Vue.use(VueRouter);
const routes = [
  { path: '/', redirect: '/Login' },
  { path: '/login', component: Login },
  {
    path: '/Layout', component: Layout, redirect: '/backlog',
    children: [
      { path: '/backlog', component: backlog }
    ]
  }
]
const router = new VueRouter({
  routes
});
/* router.beforeEach((to, from, next) => {

  const userInfo = getUser();
  if (to.path === "/login" || userInfo.token) {
    next();
  } else {
    // 不是去登录, 且没票(没有token), 拦截去登录
    next("/login");
  }
}); */

export default router;
