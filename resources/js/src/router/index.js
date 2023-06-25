import Vue              from 'vue'
import VueRouter        from 'vue-router'
// Routes
import { isUserLoggedIn, goToLogout } from '@/auth/utils'
import routesDefault    from './routes/routesDefault'
import useJwt           from '@/auth/jwt/useJwt'
import store            from '@/store'
import administracion   from './routes/administracion'
import uiElements       from './routes/ui-elements/index'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { return { x: 0, y: 0 } },
  routes: [
      ...routesDefault,
      ...administracion,
      ...uiElements,
      { path: '/', redirect: { name: 'home' } },
      { path: '*', redirect: 'error-404', },
  ],
})
router.beforeEach(async (to, _, next) => {
    const isLoggedIn = isUserLoggedIn();
    let validUser = !(to.meta?.isOut) ?? true;
    console.log('validUser -> ',validUser)
    console.log('isLoggedIn -> ',isLoggedIn)
    if (validUser) {
      try {
        console.log(" validateUser ")
        const response = await useJwt.validateUser({ tk: store.state.app.userData.token });
        console.log(response, " response ")
        console.log(response.data.data == false, " response.data.data == false ")
        if (response.data.data == false) {
          console.log('response.data.data  ',response.data.data)
          console.log('if (!response.data.data) { ')        
          setTimeout(() => {
            next();
          }, 100000000);
        }
      } catch (error) { console.log(error); }
    }
    setTimeout(() => {
      next();
    }, 10000);
  });
router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
export default router
