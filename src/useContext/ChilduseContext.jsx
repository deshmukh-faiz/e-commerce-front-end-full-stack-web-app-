import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Data1, Data2, Data3, Data4, Data5, Offer } from "./ParentuseContext"; // Import DataContext as the default export

const ChilduseContext = () => {
    const first = useContext(Data1);
    const second = useContext(Data2);
    const third = useContext(Data3);
    const fourth = useContext(Data4);
    const fifth = useContext(Data5);
    const offer = useContext(Offer);
  

  return (
    <div>
      <h1 className="text-center">Super Market</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Link to="/">
              <img
                src="../../images/banner/Apple.webp"
                className="img-fluid rounded"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Philips.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Dell.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Quick-heal.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/Tablets.webp"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <Link to="/">
              <img
                src="../../images/banner/Laptops.webp"
                className="img-fluid rounded"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <h2 className="text-center mt-3">Shop by Budget</h2>
        <div className="row g-3 mb-3">
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
             <h1>{offer}{first}</h1>
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              20K-30K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              30K-40K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              40K-50K
            </Link>
          </div>
          <div className="col">
            <Link
              to="/"
              className="bg-warning p-3 text-center display-6 rounded shadow text-decoration-none text-white d-block"
            >
              50K-60K
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChilduseContext;
