import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioCadastroComponent } from './laboratorio-cadastro.component';

describe('LaboratorioCadastroComponent', () => {
  let component: LaboratorioCadastroComponent;
  let fixture: ComponentFixture<LaboratorioCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratorioCadastroComponent]
    });
    fixture = TestBed.createComponent(LaboratorioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
