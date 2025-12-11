import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterDetail } from './poster-detail';

describe('PosterDetail', () => {
  let component: PosterDetail;
  let fixture: ComponentFixture<PosterDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
