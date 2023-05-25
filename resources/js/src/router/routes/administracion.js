export default [
  {
    path: '/usuarios',
    name: 'admin-usuarios',
    component: () => import('@/views/administracion/usuarios/Usuarios.vue'),
    meta: {
      pageTitle: 'Usuarios',
    },
  },
  {
    path: '/template-email',
    name: 'admin-template-email',
    component: () => import('@/views/administracion/templateEmails/TemplateEmails.vue'),
    meta: {
      pageTitle: 'Plantillas de correo',
    },
  },
  {
    path: '/habitaciones',
    name: 'admin-habitaciones',
    component: () => import('@/views/administracion/habitaciones/Habitaciones.vue'),
    meta: {
      pageTitle: 'Habitaciones',
    },
  },
  {
    path: '/reservaciones',
    name: 'admin-reservaciones',
    component: () => import('@/views/administracion/reservaciones/StepsReservacion.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
  {
    path: '/calendario',
    name: 'admin-reservacioness',
    component: () => import('@/views/administracion/reservaciones/Reservaciones.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
]
