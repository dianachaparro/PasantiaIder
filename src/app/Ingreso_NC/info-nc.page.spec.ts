import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNcPage } from './info-nc.page';

describe('InfoNcPage', () => {
  let component: InfoNcPage;
  let fixture: ComponentFixture<InfoNcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
