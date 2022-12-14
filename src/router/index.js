import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '@/views/RegisterView.vue';

import GlobalFeed from '@/views/GlobalFeed';
import YourFeed from '@/views/YourFeed';
import TagFeed from '@/views/TagFeed';
import Login from '@/views/LoginView.vue';
import Article from '@/views/Article';
import CreateArticle from '@/views/CreateArticle';
import EditArticle from '@/views/EditArticle';
import Settings from '@/views/Settings';

Vue.use(VueRouter);

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: TagFeed,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: CreateArticle,
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: Article,
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: EditArticle,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: GlobalFeed,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: GlobalFeed,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
