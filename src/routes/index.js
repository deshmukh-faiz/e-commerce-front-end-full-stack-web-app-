import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import TopMenu from "../components/TopMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddtoCard from '../AddtoCard'
import CartList from '../component/CartList'
import ParentJawelry from '../ContextAPI/ParentJawelry'
import ParentuseContext from '../useContext/ParentuseContext'
import BuyNow from '../component/BuyNow'
import Home2 from '../component/Home2'
import PaymentSuccess from "../component/PaymentSuccess";
// import ApiComponent from "../data/Movies";
const Home = lazy(() => import("../components/Home"));
const SignInView = lazy(() => import("../views/account/SignIn"));
import SignIn2 from '../views/account/SignIn2'
const SignUpView = lazy(() => import("../views/account/SignUp"));
const ForgotPasswordView = lazy(() =>
  import("../views/account/ForgotPassword")
);
const OrdersView = lazy(() => import("../views/account/Orders"));
const WishlistView = lazy(() => import("../views/account/Wishlist"));
const NotificationView = lazy(() => import("../views/account/Notification"));
const MyProfileView = lazy(() => import("../views/account/MyProfile"));
const ProductListView = lazy(() => import("../views/product/List"));
const ProductDetailView = lazy(() => import("../views/product/Detail"));
const ProductDetailView2 = lazy(() => import("../views/product/Detail2"));
const ProductDetailView3 = lazy(() => import("../views/product/Detail3"));
const StarZoneView = lazy(() => import("../views/product/StarZone"));
const Furniture = lazy(() => import("../views/product/Furniture"));
const CartView = lazy(() => import("../views/cart/Cart"));
const CheckoutView = lazy(() => import("../views/cart/Checkout"));
const InvoiceView = lazy(() => import("../views/cart/Invoice"));
const DocumentationView = lazy(() => import("../views/Documentation"));
const NotFoundView = lazy(() => import("../views/pages/404"));
const InternalServerErrorView = lazy(() => import("../views/pages/500"));
const ContactUsView = lazy(() => import("../views/pages/ContactUs"));
const SupportView = lazy(() => import("../views/pages/Support"));
const BlogView = lazy(() => import("../views/blog/Blog"));
const BlogDetailView = lazy(() => import("../views/blog/Detail"));

const index = () => {
  return (
    <Router>
      <Header />
      <TopMenu />
      <Suspense
        fallback={<div className="text-white text-center mt-3">Loading...</div>}
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account/signin" element={<SignInView />} />
          <Route exact path="/account/SignIn2" element={<SignIn2 />} />
          <Route exact path="/account/signup" element={<SignUpView />} />
          <Route
            exact
            path="/account/forgotpassword"
            element={<ForgotPasswordView />}
          />
          <Route exact path="/account/profile" element={<MyProfileView />} />
          <Route exact path="/account/orders" element={<OrdersView />} />
          <Route exact path="/account/wishlist" element={<WishlistView />} />
          <Route
            exact
            path="/account/notification"
            element={<NotificationView />}
          />
          <Route exact path="/category" element={<ProductListView />} />
          <Route exact path="/AddtoCard" element={<AddtoCard />} />
          <Route exact path="/CartList" element={<CartList />} />
          <Route exact path="/ParentJawelry" element={<ParentJawelry />} />
          <Route exact path="/ParentuseContext" element={<ParentuseContext />} />
          <Route exact path="/BuyNow" element={<BuyNow />} />
          <Route exact path="/Home2" element={<Home2/>} />
          <Route exact path="/PaymentSuccess" element={<PaymentSuccess/>} />
          {/* <Route exact path="/ApiComponent" element={<ApiComponent/>} /> */}
          <Route exact path="/product/detail" element={<ProductDetailView />} />
          <Route exact path="/product/detail2" element={<ProductDetailView2 />} />
          <Route exact path="/product/detail3" element={<ProductDetailView3 />} />
          <Route exact path="/star/zone" element={<StarZoneView />} />
          <Route exact path="/Furniture" element={<Furniture />} />
          <Route exact path="/cart" element={<CartView />} />
          <Route exact path="/checkout" element={<CheckoutView />} />
          <Route exact path="/invoice" element={<InvoiceView />} />
          <Route exact path="/documentation" element={<DocumentationView />} />
          <Route exact path="/contact-us" element={<ContactUsView />} />
          <Route exact path="/support" element={<SupportView />} />
          <Route exact path="/blog" element={<BlogView />} />
          <Route exact path="/blog/detail" element={<BlogDetailView />} />
          <Route exact path="/500" element={<InternalServerErrorView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};
export default index;
