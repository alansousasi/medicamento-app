import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorioItemComponent } from './laboratorio-item.component';

describe('LaboratorioItemComponent', () => {
  let component: LaboratorioItemComponent;
  let fixture: ComponentFixture<LaboratorioItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaboratorioItemComponent]
    });
    fixture = TestBed.createComponent(LaboratorioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
