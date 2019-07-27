import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaCorreoComponent } from './envia-correo.component';

describe('EnviaCorreoComponent', () => {
  let component: EnviaCorreoComponent;
  let fixture: ComponentFixture<EnviaCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
