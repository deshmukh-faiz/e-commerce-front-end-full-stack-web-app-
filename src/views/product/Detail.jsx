import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductDetailView = () => {
  // Use useSelector to access the state from the Redux store
  const count = useSelector((state) => state.count);

  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src="../../images/category/MM.jpg"
                  className="img-fluid mb-3"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline me-2">
                  Great product name goes here
                </h1>
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
                  <dt className="col-sm-3">Availability</dt>
                  <dd className="col-sm-9">In stock</dd>
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
                        onClick={() => dispatch({ type: "DECREMENT" })}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        value={count}
                        readOnly
                      />
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        onClick={() => dispatch({ type: "INCREMENT" })}
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
                  <Link to="/account/SignIn2">
                    <button
                      type="button"
                      className="btn btn-sm btn-warning me-2"
                      title="Buy now"
                    >
                      <i className="bi bi-cart3 me-1"></i>Buy now
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    title="Add to wishlist"
                  >
                    <i className="bi bi-heart-fill">Save</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
