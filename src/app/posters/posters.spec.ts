import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Posters } from './posters';

describe('Posters', () => {
  let component: Posters;
  let fixture: ComponentFixture<Posters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Posters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Posters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
