import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioParImparComponent } from './ejercicio-par-impar.component';

describe('EjercicioParImparComponent', () => {
  let component: EjercicioParImparComponent;
  let fixture: ComponentFixture<EjercicioParImparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioParImparComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioParImparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
