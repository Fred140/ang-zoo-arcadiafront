import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsEtConditionsComponent } from './terms-et-conditions.component';

describe('TermsEtConditionsComponent', () => {
  let component: TermsEtConditionsComponent;
  let fixture: ComponentFixture<TermsEtConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsEtConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsEtConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
