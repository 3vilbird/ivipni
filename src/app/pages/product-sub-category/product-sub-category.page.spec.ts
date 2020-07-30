import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSubCategoryPage } from './product-sub-category.page';

describe('ProductSubCategoryPage', () => {
  let component: ProductSubCategoryPage;
  let fixture: ComponentFixture<ProductSubCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubCategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSubCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
