import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioListaComponent } from './laboratorio-lista.component';

describe('LaboratorioListaComponent', () => {
  let component: LaboratorioListaComponent;
  let fixture: ComponentFixture<LaboratorioListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratorioListaComponent]
    });
    fixture = TestBed.createComponent(LaboratorioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
