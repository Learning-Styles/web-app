import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const STUDENT_ROUTES: RouteInfo[] = [
  // {
  //   path: '/page', title: 'Page', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  // },
  // {
  //   path: '', title: 'Menu Levels', icon: 'ft-align-left', class: 'has-sub', badge: '3', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
  //   submenu: [
  //       { path: '/YOUR-ROUTE-PATH', title: 'Second Level', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //       {
  //           path: '', title: 'Second Level Child', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
  //           submenu: [
  //               { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //               { path: '/YOUR-ROUTE-PATH', title: 'Third Level 1.2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  //           ]
  //       },
  //   ]
  // },
  {
    path: '/student/dashboard', title: 'Inicio', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/student/profile', title: 'Mi perfil', icon: 'ft-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/student/help', title: 'Ayuda', icon: 'ft-help-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/student/chaea', title: 'Formulario CHAEA', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/student/history', title: 'Mis resultados', icon: 'ft-layers', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
];
