import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

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
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/truck/index',
                    name: 'trucks',
                    component: () => import( "@/views/pages/truck/TruckIndex.vue" ),
                },
                {
                    path: '/truck/new',
                    name: 'trucks_new',
                    component: () => import("@/views/pages/truck/TruckNew.vue")
                },
                {
                    path: '/truck/edit/:id',
                    name: 'trucks_edit',
                    component: () => import("@/views/pages/truck/TruckEdit.vue")
                },
                {
                    path: '/load',
                    name: 'load_calc',
                    component: () => import("@/views/pages/LoadPage.vue")
                }
            ]
        }
    ]

});

export default router;
