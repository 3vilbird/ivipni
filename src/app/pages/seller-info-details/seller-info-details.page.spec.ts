import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerInfoDetailsPage } from './seller-info-details.page';

describe('SellerInfoDetailsPage', () => {
  let component: SellerInfoDetailsPage;
  let fixture: ComponentFixture<SellerInfoDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerInfoDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerInfoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
