import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RootpagePage } from './rootpage.page';

describe('RootpagePage', () => {
  let component: RootpagePage;
  let fixture: ComponentFixture<RootpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RootpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
