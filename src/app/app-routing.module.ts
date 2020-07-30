import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "about-us",
    loadChildren: () =>
      import("./pages/about-us/about-us.module").then(
        (m) => m.AboutUsPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./pages/forgot-password/forgot-password.module").then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/account/account.module").then((m) => m.AccountPageModule),
  },
  {
    path: "address",
    loadChildren: () =>
      import("./pages/address/address.module").then((m) => m.AddressPageModule),
  },
  {
    path: "category-product-details",
    loadChildren: () =>
      import(
        "./pages/category-product-details/category-product-details.module"
      ).then((m) => m.CategoryProductDetailsPageModule),
  },
  {
    path: "category-product-details-info",
    loadChildren: () =>
      import(
        "./pages/category-product-details-info/category-product-details-info.module"
      ).then((m) => m.CategoryProductDetailsInfoPageModule),
  },
  {
    path: "chart",
    loadChildren: () =>
      import("./pages/chart/chart.module").then((m) => m.ChartPageModule),
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./pages/checkout/checkout.module").then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: "my-order",
    loadChildren: () =>
      import("./pages/my-order/my-order.module").then(
        (m) => m.MyOrderPageModule
      ),
  },
  {
    path: "my-password",
    loadChildren: () =>
      import("./pages/my-password/my-password.module").then(
        (m) => m.MyPasswordPageModule
      ),
  },
  {
    path: "my-profile",
    loadChildren: () =>
      import("./pages/my-profile/my-profile.module").then(
        (m) => m.MyProfilePageModule
      ),
  },
  {
    path: "no-internet",
    loadChildren: () =>
      import("./pages/no-internet/no-internet.module").then(
        (m) => m.NoInternetPageModule
      ),
  },
  {
    path: "notification",
    loadChildren: () =>
      import("./pages/notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "order-details",
    loadChildren: () =>
      import("./pages/order-details/order-details.module").then(
        (m) => m.OrderDetailsPageModule
      ),
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./pages/payment/payment.module").then((m) => m.PaymentPageModule),
  },
  {
    path: "payment-details",
    loadChildren: () =>
      import("./pages/payment-details/payment-details.module").then(
        (m) => m.PaymentDetailsPageModule
      ),
  },
  {
    path: "paymentremain",
    loadChildren: () =>
      import("./pages/paymentremain/paymentremain.module").then(
        (m) => m.PaymentremainPageModule
      ),
  },
  {
    path: "paymentremaindetails",
    loadChildren: () =>
      import("./pages/paymentremaindetails/paymentremaindetails.module").then(
        (m) => m.PaymentremaindetailsPageModule
      ),
  },
  {
    path: "payment-success-failure",
    loadChildren: () =>
      import(
        "./pages/payment-success-failure/payment-success-failure.module"
      ).then((m) => m.PaymentSuccessFailurePageModule),
  },
  {
    path: "paythank-you",
    loadChildren: () =>
      import("./pages/paythank-you/paythank-you.module").then(
        (m) => m.PaythankYouPageModule
      ),
  },
  {
    path: "place-order",
    loadChildren: () =>
      import("./pages/place-order/place-order.module").then(
        (m) => m.PlaceOrderPageModule
      ),
  },
  {
    path: "privacy-policy",
    loadChildren: () =>
      import("./pages/privacy-policy/privacy-policy.module").then(
        (m) => m.PrivacyPolicyPageModule
      ),
  },
  {
    path: "product-sub-category",
    loadChildren: () =>
      import("./pages/product-sub-category/product-sub-category.module").then(
        (m) => m.ProductSubCategoryPageModule
      ),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./pages/registration/registration.module").then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: "reg-thankyou",
    loadChildren: () =>
      import("./pages/reg-thankyou/reg-thankyou.module").then(
        (m) => m.RegThankyouPageModule
      ),
  },
  {
    path: "rootpage",
    loadChildren: () =>
      import("./pages/rootpage/rootpage.module").then(
        (m) => m.RootpagePageModule
      ),
  },
  {
    path: "search-products",
    loadChildren: () =>
      import("./pages/search-products/search-products.module").then(
        (m) => m.SearchProductsPageModule
      ),
  },
  {
    path: "seller-info",
    loadChildren: () =>
      import("./pages/seller-info/seller-info.module").then(
        (m) => m.SellerInfoPageModule
      ),
  },
  {
    path: "seller-info-details",
    loadChildren: () =>
      import("./pages/seller-info-details/seller-info-details.module").then(
        (m) => m.SellerInfoDetailsPageModule
      ),
  },
  {
    path: "shoppingcart",
    loadChildren: () =>
      import("./pages/shoppingcart/shoppingcart.module").then(
        (m) => m.ShoppingcartPageModule
      ),
  },
  {
    path: "terms-of-use",
    loadChildren: () =>
      import("./pages/terms-of-use/terms-of-use.module").then(
        (m) => m.TermsOfUsePageModule
      ),
  },
  {
    path: "thank-you",
    loadChildren: () =>
      import("./pages/thank-you/thank-you.module").then(
        (m) => m.ThankYouPageModule
      ),
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "wish-list",
    loadChildren: () =>
      import("./pages/wish-list/wish-list.module").then(
        (m) => m.WishListPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
