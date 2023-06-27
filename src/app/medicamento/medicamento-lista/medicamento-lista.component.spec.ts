import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoListaComponent } from './medicamento-lista.component';

describe('MedicamentoListaComponent', () => {
  let component: MedicamentoListaComponent;
  let fixture: ComponentFixture<MedicamentoListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicamentoListaComponent]
    });
    fixture = TestBed.createComponent(MedicamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
