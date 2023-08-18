import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViajesComponent } from './viajes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "viajes",
    pathMatch: 'full'
  },
  {
    path: '',
    component: ViajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
