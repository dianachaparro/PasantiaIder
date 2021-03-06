import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'crear-proceso', loadChildren: './crear-proceso/crear-proceso.module#CrearProcesoPageModule' },
  { path: 'inicio-diagnostico', loadChildren: './inicio-diagnostico/inicio-diagnostico.module#InicioDiagnosticoPageModule' },
  { path: 'no-conformidades', loadChildren: './no-conformidades/no-conformidades.module#NoConformidadesPageModule' },
  { path: 'expediente', loadChildren: './expediente/expediente.module#ExpedientePageModule' },
  { path: 'info-exp', loadChildren: './info-exp/info-exp.module#InfoExpPageModule' },
  { path: 'estatus-exp', loadChildren: './estatus-exp/estatus-exp.module#EstatusExpPageModule' },
  { path: 'foto', loadChildren: './foto/foto.module#FotoPageModule' },
  { path: 'info-nc', loadChildren: './info-nc/info-nc.module#InfoNcPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
