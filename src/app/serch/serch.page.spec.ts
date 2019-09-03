import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchPage } from './serch.page';

describe('SerchPage', () => {
  let component: SerchPage;
  let fixture: ComponentFixture<SerchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
