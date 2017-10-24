import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagegridComponent } from './homepagegrid.component';

describe('HomepagegridComponent', () => {
  let component: HomepagegridComponent;
  let fixture: ComponentFixture<HomepagegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
