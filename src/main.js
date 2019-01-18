import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
