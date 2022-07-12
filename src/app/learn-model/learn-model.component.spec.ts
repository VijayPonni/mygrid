import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnModelComponent } from './learn-model.component';

describe('LearnModelComponent', () => {
  let component: LearnModelComponent;
  let fixture: ComponentFixture<LearnModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
