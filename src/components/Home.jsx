import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../component/CardIcon"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

const HomeView = (product) => {
  const components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  const iconProducts = data.iconProducts;
  const rows = [...Array(Math.ceil(iconProducts.length / 4))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) =>
    iconProducts.slice(idx * 4, idx * 4 + 4)
  );
  // map the rows as div.row
  const carouselContent = productRows.map((row, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <div className="row g-3">
        {row.map((product, idx) => {
          const ProductImage = components[product.img];
          return (
            <div key={idx} className="col-md-3">
              <CardIcon
                title={product.title}
                text={product.text}
                tips={product.tips}
                to={product.to}
              >
                <ProductImage className={product.cssClass} width="80" height="80" />
              </CardIcon>
            </div>
          );
        })}
      </div>
    </div>
  ));

  return (
    <>
      <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      <div className="container-fluid bg-light mb-3">
        <div className="row g-3">
          <div className="col-md-9">
            <Carousel id="elect-product-category" className="mb-3">
              {carouselContent}
            </Carousel>
            <Support />
          </div>
        
        </div>
      </div>
      <div className="container-fluid bg-light mb-3">
        <div className="row">
          <div className="col-md-12">
            <CardDealsOfTheDay
              endDate={Date.now() + 1000 * 60 * 60 * 14}
              title="Deals of the Day"
              to="/"
            >
              <Carousel id="elect-product-category1">{carouselContent}</Carousel>
            </CardDealsOfTheDay>
          </div>
        </div>
      </div>

      <div className="bg-info bg-gradient p-3 text-center mb-3">
        <h4 className="m-0">Explore Fashion Collection</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to={"./"} className="text-decoration-none">
              <div className="card text-center">
                <div className="card-body">
                  <img src="./images/category/c4.jpg" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to={"./"} className="text-decoration-none">
              <div className="card text-center">
                <div className="card-body">
                  <img src="./images/category/c5.jpg" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to={"./"} className="text-decoration-none">
              <div className="card text-center">
                <div className="card-body">
                  <img src="./images/category/c6.jpg" alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to={"./"} className="text-decoration-none">
              <div className="card text-center">
                <div className="card-body">
                  <img src="./images/category/c7.png" alt="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

         {/* <div className='flex'>
            {
                [product].map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div> */}
    </>
  );
};

export default HomeView;
