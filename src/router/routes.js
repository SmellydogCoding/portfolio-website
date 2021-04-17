
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: 'about', name: 'About', component: () => import('pages/About.vue') },
      { path: 'contact', name: 'Contact', component: () => import('pages/Contact.vue') },
      { path: '/:catchAll(.*)*', component: () => import('pages/Error404.vue') }

    ]
  }
]

export default routes
