import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudViajesComponent } from './solicitud-viajes.component';

describe('SolicitudViajesComponent', () => {
  let component: SolicitudViajesComponent;
  let fixture: ComponentFixture<SolicitudViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudViajesComponent]
    });
    fixture = TestBed.createComponent(SolicitudViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
