import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioAnagramaComponent } from './ejercicio-anagrama.component';

describe('EjercicioAnagramaComponent', () => {
  let component: EjercicioAnagramaComponent;
  let fixture: ComponentFixture<EjercicioAnagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioAnagramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
