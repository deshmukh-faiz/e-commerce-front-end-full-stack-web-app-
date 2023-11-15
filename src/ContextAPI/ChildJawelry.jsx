import { Link } from "react-router-dom";
import { Data1, Data2, Data3, Data4, Data5, Offer } from "./ParentJawelry"; // Import DataContext as the default export
const ChildJawelry = () => {
  return (
    <div>
      <h1 className="text-center">Furniture Store</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Link to="/">
              <img
                src="../../images/banner/f1.png"
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
                    src="../../images/banner/f2.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/f3.png"
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
                    src="../../images/banner/f4.png"
                    className="img-fluid rounded"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="col">
                <Link to="/">
                  <img
                    src="../../images/banner/f5.png"
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
                src="../../images/banner/f6.png"
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
              <Data1.Consumer>
      {(data1) => {     // < ye arrow function hai
        return (
          <Offer.Consumer>
            {(offer) => {     // < ye bhi arrow function hai
              return (          //  call hell hota he iss liye context api ko avoid karte, iss ke jaga par hum usecontext ka use karte hai.
                <h1>    
                  {offer} {data1}     
                </h1>
              );
            }}
          </Offer.Consumer>
        );
      }}
    </Data1.Consumer>
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

export default ChildJawelry;
