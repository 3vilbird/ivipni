import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentremainPage } from './paymentremain.page';

describe('PaymentremainPage', () => {
  let component: PaymentremainPage;
  let fixture: ComponentFixture<PaymentremainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentremainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentremainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
