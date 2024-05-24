import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard produit ',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    },
    children: [
      {
        name: 'Dashboard projet',
        url: '/dashboard/dasproje',
        badge: {
          color: 'info',
          text: 'NEW'
        },
      },
    
    ]
  },
  {
    title: true,
    name: 'Incorporer  Organisation'
  },
  {
    name: 'Organisation',
    url: '/theme/organisation',
    iconComponent: { name: 'cil-drop' }
  },
  
  {
    name: 'Organisation Administrative',
    title: true
  },
  {
    name: 'liste des produit',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'formulaire produit',
        url: '/base/productlist'
      },
    ]
  },
  {
    name: 'liste des projets',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'formulaire projet',
        url: '/buttons/projectlist'
      },
      {
        name: 'Liste Produit Projet',
        url: '/buttons/listproduitprojet'
      },
      
     
    
    ]
  },
  {
    name: 'liste des utilisateurs',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      
      {
        name: 'users',
        url: '/forms/users'
      },

    ]
  },
  {
    name: 'Tache projet',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [ 
      {
        name: 'Tache',
        url: '/icons/tache',
      },
      {
        name: 'Consulter Tache',
        url: '/icons/consultertache',
      },
    ]

    },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    title: true,
    name: 'Branche'
  },
  {
    name: 'Tableau Branche',
    url: '/pages',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Consulter Tableau Branche',
        url: '/pages/branche'
      },
      // {
      //   name: 'Liste Application',
      //   url: '/pages/listeapplication'
      // },
      // {
      //   name: 'Liste Pipeline',
      //   url: '/pages/listepiplienne'
      // },
      // {
      //   name: 'Scan',
      //   url: '/pages/scan'
      // },
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    title: true,
    name: 'Links',
    class: 'py-0'
  },

];
