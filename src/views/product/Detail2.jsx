import { lazy } from "react";
import { data } from "../../data";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Languageoption from "../../component/LD";
import i18next from "i18next"
import React, { useState } from "react";
const CardFeaturedProduct = lazy(() =>
  import("../../components/card/CardFeaturedProduct")
);
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));

const ProductDetailView = () => {
  const { t } = useTranslation();
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
}
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  const handleIncrease = () => {
    setQuantity(quantity + 1); // Increase quantity by 1
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease quantity by 1, but ensure it doesn't go below 1
    }
  };

  return (
    <>
    <div className="container-fluid mt-1">
    <div className="d-flex justify-content-center mb-3"> {/* Add this div for centering */}
          <Languageoption onChange={(e) => handleClick(e)} />
        </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src="../../images/category/M22.jpg"
                className="img-fluid mb-3"
                alt=""
              />
            </div>
            
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2">Great product name goes here</h1>
              <span className="badge bg-success me-2">New</span>
              <span className="badge bg-danger me-2">Hot</span>
              <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />|{" "}
                <span className="text-muted small">
                  42 ratings and 4 reviews
                </span>
              </div>
              <dl className="row small mb-3">
                <dt className="col-sm-3">{t('availability')}</dt>
                <dd className="col-sm-9">In Stock</dd>
                <dt className="col-sm-3">Sold by</dt>
                <dd className="col-sm-9">Authorised Store</dd>
                <dt className="col-sm-3">Size</dt>
                <dd className="col-sm-9">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizes"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="sizes">
                      S
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizem"
                      disabled
                    />
                    <label className="form-check-label" htmlFor="sizem">
                      M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizel"
                    />
                    <label className="form-check-label" htmlFor="sizel">
                      L
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizexl"
                    />
                    <label className="form-check-label" htmlFor="sizexl">
                      XL
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      id="sizexxl"
                    />
                    <label className="form-check-label" htmlFor="sizexxl">
                      XXL
                    </label>
                  </div>
                </dd>
                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">
                  <button className="btn btn-sm btn-primary p-2 me-2"></button>
                  <button className="btn btn-sm btn-secondary p-2 me-2"></button>
                  <button className="btn btn-sm btn-success p-2 me-2"></button>
                  <button className="btn btn-sm btn-danger p-2 me-2"></button>
                  <button className="btn btn-sm btn-warning p-2 me-2"></button>
                  <button className="btn btn-sm btn-info p-2 me-2"></button>
                  <button className="btn btn-sm btn-dark p-2 me-2"></button>
                </dd>
              </dl>

              <div className="mb-3">
                <span className="fw-bold h5 me-2">900</span>
                <del className="small text-muted me-2">1000</del>
                <span className="rounded p-1 bg-warning  me-2 small">
                  100
                </span>
              </div>
              <div className="mb-3">
                <div className="d-inline float-start me-2">
            <div className="input-group input-group-sm mw-140">
              <button
                className="btn btn-primary text-white"
                type="button"
                onClick={handleDecrease}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
              <input
                type="text"
                className="form-control"
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-primary text-white"
                type="button"
                onClick={handleIncrease}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
                <Link to="/account/SignIn2">
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  title="Add to cart"
                >
                  <i className="bi bi-cart-plus me-1"></i>Add to cart
                </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-sm btn-warning me-2"
                  title="Buy now"
                >
                  <i className="bi bi-cart3 me-1"></i>Buy now
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  title="Add to wishlist"
                >
                  <i className="bi bi-heart-fill">Save</i>
                </button>
              </div>
              <div>
                <p className="fw-bold mb-2 small">Product Highlights</p>
                <ul className="small">
                  <li>
                  FOLDABLE, PORTABLE, LIGHTWEIGHT: The Carnation Laptop Stand has a thin, hard plastic frame. It can be easily folded and carried around. Durable enough to withstand the weight of up to 55 lbs (25kg).
                  </li>
                  <li>OPTIMIZED FOR AIR VENTILATION: To prevent your computer from overheating, the laptop stand has large cut-out vents and adjustable height options that allow air to circulate from all sides. Well vented.</li>
                  <li>ADJUSTABLE HEIGHT 7 OPTIONS: Raise your laptop or tablet to any of seven adjustable heights from 2.7” to 6.7” so you can get a clearer, glare-free view while getting neck pain relief and preventing eye strain.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                  <a
                    className="nav-link"
                    id="nav-randr-tab"
                    data-bs-toggle="tab"
                    href="#nav-randr"
                    role="tab"
                    aria-controls="nav-randr"
                    aria-selected="false"
                  >
                    Ratings & Reviews
                  </a>
                  <a
                    className="nav-link"
                    id="nav-faq-tab"
                    data-bs-toggle="tab"
                    href="#nav-faq"
                    role="tab"
                    aria-controls="nav-faq"
                    aria-selected="false"
                  >
                    Questions and Answers
                  </a>
                  <a
                    className="nav-link"
                    id="nav-ship-returns-tab"
                    data-bs-toggle="tab"
                    href="#nav-ship-returns"
                    role="tab"
                    aria-controls="nav-ship-returns"
                    aria-selected="false"
                  >
                    Shipping & Returns
                  </a>
                  <a
                    className="nav-link"
                    id="nav-size-chart-tab"
                    data-bs-toggle="tab"
                    href="#nav-size-chart"
                    role="tab"
                    aria-controls="nav-size-chart"
                    aria-selected="false"
                  >
                    Size Chart
                  </a>
                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <Details />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-randr"
                  role="tabpanel"
                  aria-labelledby="nav-randr-tab"
                >
                  {Array.from({ length: 5 }, (_, key) => (
                    <RatingsReviews key={key} />
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-faq"
                  role="tabpanel"
                  aria-labelledby="nav-faq-tab"
                >
                  <dl>
                    {Array.from({ length: 5 }, (_, key) => (
                      <QuestionAnswer key={key} />
                    ))}
                  </dl>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-ship-returns"
                  role="tabpanel"
                  aria-labelledby="nav-ship-returns-tab"
                >
                  <ShippingReturns />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-size-chart"
                  role="tabpanel"
                  aria-labelledby="nav-size-chart-tab"
                >
                  <SizeChart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <CardFeaturedProduct data={data.products} />
          <CardServices />
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetailView;
