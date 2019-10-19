import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'crear-proceso', loadChildren: './crear-proceso/crear-proceso.module#CrearProcesoPageModule' },
  { path: 'inicio-diagnostico', loadChildren: './inicio-diagnostico/inicio-diagnostico.module#InicioDiagnosticoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
