import { createWebHistory, createRouter } from "vue-router"

import MainPage from "./pages/MainPage.vue"
import Error404Page from "./pages/Error404Page.vue"

const routes = [
    { path: '/', component: MainPage },
    { path: '/:catchAll(.*)', component: Error404Page },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;