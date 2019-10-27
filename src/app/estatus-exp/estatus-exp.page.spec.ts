import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusExpPage } from './estatus-exp.page';

describe('EstatusExpPage', () => {
  let component: EstatusExpPage;
  let fixture: ComponentFixture<EstatusExpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusExpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusExpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
