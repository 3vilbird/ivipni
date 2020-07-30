// all clear
import { Component, OnInit, OnDestroy } from "@angular/core";
// import { NavController, NavParams } from "ionic-angular";
import { SearchProductsPage } from "../search-products/search-products.page";
import { CategoryProductDetailsPage } from "../category-product-details/category-product-details.page";
import { Logger } from "../../../providers/logger/logger";
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-product-sub-category",
  templateUrl: "./product-sub-category.page.html",
  styleUrls: ["./product-sub-category.page.scss"],
})
export class ProductSubCategoryPage implements OnInit {
  catName;
  headerName;
  id;
  sub;

  tempimg =
    "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
  constructor(
    public logger: Logger,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  subcategoryName(catNames) {
    // this.logger.info("invoking subcategoryName ");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sub_category_id: catNames.sub_category_id,
        sub_category_name: catNames.sub_category_name,
        image: catNames.image,
      },
    };
    this.router.navigate(["/category-product-details"], navigationExtras);
  }

  quickOrderFn() {
    this.router.navigateByUrl("/search-products");
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // console.log("=====================================the parameter data");

      this.headerName = params["sub_category_name"];
      this.catName = JSON.parse(params["subSubCategories"]);
    });
  }
}
