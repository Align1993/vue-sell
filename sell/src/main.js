// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
// import router from './router'

Vue.config.productionTip = false
 Vue.use(VueRouter);
 
 const routes = [{
 	path: '/',
 	redirect: '/goods'
 },
 {
 	path: '/goods',
 	component: goods
 },{
 	path: '/seller',
 	component: seller
 },{
 	path: '/ratings',
 	component: ratings
 }];

 const router = new VueRouter({
 	linkActiveClass: 'active',
 	routes
 });

 /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
