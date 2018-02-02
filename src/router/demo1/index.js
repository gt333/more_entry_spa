import Vue from 'vue'
import Router from 'vue-router'
const index = resolve => {
  require(['@view/demo1/view/index'], resolve)
};
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: index
    }, {
      path: '/Index',
      name: 'Index',//设置首页
      component: index
    }
  ]
});
export default router;