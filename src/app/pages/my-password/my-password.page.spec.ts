import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyPasswordPage } from './my-password.page';

describe('MyPasswordPage', () => {
  let component: MyPasswordPage;
  let fixture: ComponentFixture<MyPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
