import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    ViajesComponent
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ViajesModule { }
