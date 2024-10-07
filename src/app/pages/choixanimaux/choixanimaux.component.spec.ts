import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixanimauxComponent } from './choixanimaux.component';

describe('ChoixanimauxComponent', () => {
  let component: ChoixanimauxComponent;
  let fixture: ComponentFixture<ChoixanimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixanimauxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixanimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
