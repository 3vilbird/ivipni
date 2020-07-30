import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryProductDetailsInfoPage } from './category-product-details-info.page';

describe('CategoryProductDetailsInfoPage', () => {
  let component: CategoryProductDetailsInfoPage;
  let fixture: ComponentFixture<CategoryProductDetailsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductDetailsInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProductDetailsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
