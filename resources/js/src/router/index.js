import Vue from 'vue'
import VueRouter from 'vue-router'
// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import routesDefault from './routes/routesDefault'
import useJwt             from '@/auth/jwt/useJwt'
import store              from '@/store'
import administracion from './routes/administracion'
import uiElements from './routes/ui-elements/index'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { return { x: 0, y: 0 } },
  routes: [
    // { path: '/', redirect: { name: 'home' } },
    ...routesDefault,
    ...administracion,
    ...uiElements,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})
router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  let validateUser = false;
//   if(isLoggedIn){
//     useJwt
//     .validateUser({ tk   : store.state.app.userData.token, })
//     .then(response => {
//       validateUser = response.data.data;
//       console.log('response.data.data -> ', response.data.data)
//       store.commit('app/UPDATE_USERVALIDATION', response.data.data)
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next({ name: 'home' })
  }
  return next()
})
router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
export default router
