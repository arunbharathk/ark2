import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcarouselComponent } from './ngcarousel.component';

describe('NgcarouselComponent', () => {
  let component: NgcarouselComponent;
  let fixture: ComponentFixture<NgcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
