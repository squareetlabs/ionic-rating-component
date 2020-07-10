import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicRatingComponent } from './ionic-rating.component';

describe('IonicRatingComponent', () => {
  let component: IonicRatingComponent;
  let fixture: ComponentFixture<IonicRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
