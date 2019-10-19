import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProcesoPage } from './crear-proceso.page';

describe('CrearProcesoPage', () => {
  let component: CrearProcesoPage;
  let fixture: ComponentFixture<CrearProcesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProcesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProcesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
