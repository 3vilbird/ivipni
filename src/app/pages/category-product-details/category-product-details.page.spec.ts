import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryProductDetailsPage } from './category-product-details.page';

describe('CategoryProductDetailsPage', () => {
  let component: CategoryProductDetailsPage;
  let fixture: ComponentFixture<CategoryProductDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProductDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
