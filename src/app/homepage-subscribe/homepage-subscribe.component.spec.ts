import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageSubscribeComponent } from './homepage-subscribe.component';

describe('HomepageSubscribeComponent', () => {
  let component: HomepageSubscribeComponent;
  let fixture: ComponentFixture<HomepageSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
