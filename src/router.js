import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./components/Header.vue";
import AppFooter from "./components/Footer.vue";
import Home from "./view/Home.vue";
import About from "./view/About.vue";

Vue.use(Router);

let router = new Router({
    linkExactActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            components: {
                header: AppHeader,
                default: Home,
                footer: AppFooter
            }
        },
        {
            path: "/about",
            name: "about",
            components: {
                header: AppHeader,
                default: About,
                footer: AppFooter
            }
        }
    ]
});

export default router;
