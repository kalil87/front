import { Routes } from '@angular/router';
import { AdministracionMaqueta } from './maqueta/administracion/administracion-maqueta/administracion-maqueta';
import { AutenticacionMaqueta } from './maqueta/autenticacion/autenticacion-maqueta/autenticacion-maqueta';

export const routes: Routes = [
  {
    path: '',
    component: AdministracionMaqueta,
    children:[]
  },
  {
    path: 'autenticacion', // autenticacion/iniciar-sesion
    component:AutenticacionMaqueta,
    children: [
      {
        path: 'iniciar-sesion', 
        loadComponent: () => import('./modulos/autenticacion/paginas/iniciarSesion/iniciarSesion')
      },
      {
        path: '**',
        redirectTo: 'iniciar-sesion',
        pathMatch: 'full'
      }
    ]
  }
];
