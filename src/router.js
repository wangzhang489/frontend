import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        // {
        //     path: "/",
        //     alias: "/tutorials",
        //     name: "tutorials",
        //     component: () => import("./tutorial/TutorialsList")
        // },
        // {
        //     path: "/tutorials/:id",
        //     name: "tutorial-details",
        //     component: () => import("./tutorial/Tutorial")
        // },
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
        // {
        //     path: "/add",
        //     name: "add",
        //     component: () => import("./book/AddTutorial")
        // },

        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
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
        // {
        //     path: '/user',
        //     name: 'user',
        //     // lazy-loaded
        //     component: () => import('./views/BoardUser.vue')
        // },
    ]
});
