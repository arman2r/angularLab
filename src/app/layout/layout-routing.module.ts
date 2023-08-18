import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ViajesComponent } from '../paginas/viajes/viajes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "viajes",
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'viajes',
        loadChildren: () =>
          import('../paginas/viajes/viajes.module').then(
            (m) => m.ViajesModule
          ),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
