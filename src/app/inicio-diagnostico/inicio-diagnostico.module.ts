import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioDiagnosticoPage } from './inicio-diagnostico.page';

const routes: Routes = [
  {
    path: '',
    component: InicioDiagnosticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InicioDiagnosticoPage]
})
export class InicioDiagnosticoPageModule {}
