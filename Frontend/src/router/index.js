import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from "@/views/pages/NotFound.vue";
import { useAuthStore } from './auth';

/**
 * TODO: Ricordarsi di proteggere le rotte
 */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
            meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue'),
                    meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue'),
            meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue'),
            meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue'),
            meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue'),
            meta: { requiresAuth: false } // Indichiamo che questa pagina è protetta
        }
    ]
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(); // Recupera lo stato di autenticazione
    const isAuthenticated = authStore.isLoggedIn; // Controlla se l'utente è loggato

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/auth/login'); // Se non autenticato, reindirizza alla login
    } else {
        next(); // Altrimenti prosegui normalmente
    }
});

export default router;
