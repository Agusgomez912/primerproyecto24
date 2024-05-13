import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposActualesComponent } from './equipos-actuales.component';

describe('EquiposActualesComponent', () => {
  let component: EquiposActualesComponent;
  let fixture: ComponentFixture<EquiposActualesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposActualesComponent]
    });
    fixture = TestBed.createComponent(EquiposActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
