import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentSuccessFailurePage } from './payment-success-failure.page';

describe('PaymentSuccessFailurePage', () => {
  let component: PaymentSuccessFailurePage;
  let fixture: ComponentFixture<PaymentSuccessFailurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessFailurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSuccessFailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
