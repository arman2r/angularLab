import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {

  users = [{'id': 1}, {'id': 2}, {'id': 3}]
  selected :any;
  constructor() {}

  select(item:any) {
    this.selected = item;
  };

  isActive(item:any) {
      return this.selected === item;
  };
}
