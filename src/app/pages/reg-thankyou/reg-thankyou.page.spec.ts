import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegThankyouPage } from './reg-thankyou.page';

describe('RegThankyouPage', () => {
  let component: RegThankyouPage;
  let fixture: ComponentFixture<RegThankyouPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegThankyouPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegThankyouPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
