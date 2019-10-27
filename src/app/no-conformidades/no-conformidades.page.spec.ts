import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoConformidadesPage } from './no-conformidades.page';

describe('NoConformidadesPage', () => {
  let component: NoConformidadesPage;
  let fixture: ComponentFixture<NoConformidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoConformidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoConformidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
