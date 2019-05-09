import Vue from 'vue';
import Router from 'vue-router';
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
import Home from './view/Home.vue';
import About from './view/About.vue';
import ERROR from './view/ERROR.vue';
import Todo from './view/Todo.vue';

Vue.use(Router);
var publicPath = process.env.BASE_URL;
let router = new Router({
  base: publicPath,
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: '/todo',
      name: 'todo',
      components: {
        header: AppHeader,
        default: Todo,
        footer: AppFooter
      }
    },
    {
      path: '*',
      components: {
        header: AppHeader,
        default: ERROR,
        footer: AppFooter
      }
    }
  ]
});

export default router;
