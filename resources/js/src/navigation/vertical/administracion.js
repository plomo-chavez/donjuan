export default [
    // {
    //   title: 'Reservaciones',
    //   route: 'admin-reservacionesss',
    //   icon: 'CalendarIcon',
    // },
    {
      title: 'Reservaciones',
      route: 'admin-reservacioness',
      icon: 'CalendarIcon',
    },
    {
        title: 'Administración',
        icon: 'SettingsIcon',
        children: [
            {
                title: 'Habitaciones',
                route: 'admin-habitaciones',
            },
            {
                title: 'Trabajadores',
                route: 'admin-trabajadores',
            },
        ],
    },
    {
        title: 'Configuración',
        icon: 'SettingsIcon',
        children: [
            {
                title: 'Plantillas de correo',
                route: 'admin-template-email',
            },
            {
                title: 'Usuarios',
                route: 'admin-usuarios',
            },
        ],
    },
  // {
  //   title: 'Form Wizard',
  //   route: 'form-wizard',
  //   icon: 'PackageIcon',
  // },
  // {
  //   title: 'Form Validation',
  //   route: 'form-validation',
  //   icon: 'CheckCircleIcon',
  // },
  // {
  //   title: 'Form Repeater',
  //   route: 'form-repeater',
  //   icon: 'CopyIcon',
  // },
  // {
  //   title: 'BS Table',
  //   route: 'table-bs-table',
  //   icon: 'ServerIcon',
  // },
  // {
  //   title: 'Good Table',
  //   route: 'table-good-table',
  //   icon: 'GridIcon',
  // },
]
