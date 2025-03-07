import AppLayout from "../layout/AppLayout.vue";
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from "../views/pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import("../views/Dashboard.vue")
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]

});

export default router;
