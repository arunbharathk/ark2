import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepagesection2Component } from './homepagesection2.component';

describe('Homepagesection2Component', () => {
  let component: Homepagesection2Component;
  let fixture: ComponentFixture<Homepagesection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepagesection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepagesection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
