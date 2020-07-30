import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaythankYouPage } from './paythank-you.page';

describe('PaythankYouPage', () => {
  let component: PaythankYouPage;
  let fixture: ComponentFixture<PaythankYouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaythankYouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaythankYouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
