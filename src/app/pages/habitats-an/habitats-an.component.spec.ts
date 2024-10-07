import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitatsAnComponent } from './habitats-an.component';

describe('HabitatsAnComponent', () => {
  let component: HabitatsAnComponent;
  let fixture: ComponentFixture<HabitatsAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitatsAnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitatsAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
