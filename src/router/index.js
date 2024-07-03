import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'entry',
        component: import('../pages/MyEntryPage.vue'),
    },
    {
        path: '/submit',
        name: 'submit',
        component: import('../pages/MyAuth.vue'),
    },
    {
        path: '/boards',
        name: 'boards',
        component: import('../pages/BoardsList.vue'),
    },
]

const router = createRouter({history: createWebHistory(), routes})

export default router;
