import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import About from "./views/About.vue";
import Privacy from "@/views/Privacy.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: '/home',
            component: Home
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./book/AddBook")
        },
        // {
        //     path: "/books",
        //     name: "books",
        //     component: () => import("./book/BooksList")
        // },
        {
            path: "/books/:id",
            name: "book-details",
            component: () => import("./book/Book")
        },
        {
            path: "/booklist",
            name: "booklist",
            component: () => import("./booklist/BookList_List.vue")
        },
        {
            path: "/booklist/:id",
            name: "booklist-details",
            component: () => import("./booklist/BookList.vue")
        },
        {
            path: "/buybooks/:id",
            name: "buybookpage",
            component: () => import("./views/Buy.vue")
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/privacy',
            component: Privacy
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () => import('./views/Profile.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            // lazy-loaded
            component: () => import('./views/BoardAdmin.vue')
        },
    ]
});
