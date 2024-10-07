import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisetcontactComponent } from './avisetcontact.component';

describe('AvisetcontactComponent', () => {
  let component: AvisetcontactComponent;
  let fixture: ComponentFixture<AvisetcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisetcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisetcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
