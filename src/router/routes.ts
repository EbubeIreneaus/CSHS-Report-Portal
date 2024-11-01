import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('pages/AuthPage/AuthPage.vue'),
  },
  { path: '/result', component: () => import('pages/ResultPage.vue') },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'generate-result-epins',
        component: () => import('pages/EpinsGeneratePage.vue'),
      },
      {
        path: 'check-result',
        component: () => import('pages/CheckResultPage.vue'),
      },
    ],
  },

  {
    path: '/teacher',
    component: () => import('layouts/TeachersLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Teachers/HomePage.vue')},
      {path: 'students', component: ()=>import('pages/Teachers/ManageStudents.vue')},
      {path: 'uploadResult/students', component: ()=>import('pages/Teachers/uploadResult/StudentsPage.vue')}
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
