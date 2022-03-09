import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/games',
    name: 'games',
    component: () => import('/Users/shameed2/mywork/JDs/Sony/MyGameLibrary/client/src/components/GamesList.vue'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('/Users/shameed2/mywork/JDs/Sony/MyGameLibrary/client/src/components/AddGame.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
