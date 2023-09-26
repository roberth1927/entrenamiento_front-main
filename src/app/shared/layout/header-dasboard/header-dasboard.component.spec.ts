import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDasboardComponent } from './header-dasboard.component';

describe('HeaderDasboardComponent', () => {
  let component: HeaderDasboardComponent;
  let fixture: ComponentFixture<HeaderDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDasboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
