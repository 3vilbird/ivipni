import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentremaindetailsPage } from './paymentremaindetails.page';

describe('PaymentremaindetailsPage', () => {
  let component: PaymentremaindetailsPage;
  let fixture: ComponentFixture<PaymentremaindetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentremaindetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentremaindetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
