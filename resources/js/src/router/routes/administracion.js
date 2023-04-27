export default [
  {
    path: '/usuarios',
    name: 'admin-usuarios',
    component: () => import('@/views/administracion/usuarios/Usuarios.vue'),
    meta: {
      pageTitle: 'Usuarios',
    },
  },
//   {
//     path: '/trabajadores',
//     name: 'admin-trabajadores',
//     component: () => import('@/views/components/calendar/Calendar.vue'),
//     meta: {
//       pageTitle: 'Trabajadores',
//     },
//   },
  {
    path: '/habitaciones',
    name: 'admin-habitaciones',
    component: () => import('@/views/useFactory.vue'),
    meta: {
      pageTitle: 'Habitaciones',
    },
  },
  {
    path: '/reservaciones',
    name: 'admin-reservaciones',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
  {
    path: '/calendario',
    name: 'admin-calendario',
    component: () => import('@/views/components/calendar/Calendar.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
]
