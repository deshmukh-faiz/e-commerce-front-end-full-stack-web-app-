import { lazy } from "react";
import '../App.css';
import { Link } from "react-router-dom";
const Search = lazy(() => import("./Search"));

const Header = ({ cart }) => {
  const cartCount = cart ? cart.length : 0;

  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/">
              <img alt="logo" src="../../images/banner/my.png" />
            </Link>
          </div>
          <div className="col-md-5">
            <Search />
          </div>
          <div className="col-md-4">
            {/* <div className="position-relative d-inline me-3">
            <Link to="/cart" className="btn btn-dark">
        <i className="bi bi-cart3">cart</i>
        <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
          {cartCount}
        </div>
      </Link>
            </div> */}
            
            <button className="btn btn-dark " >
            <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link></button> |  {""}
              <button className="btn btn-primary " to="/account/signup">
              <Link className="dropdown-item" to="/account/signup">
              Sign Up
                  </Link> </button>
                  <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary rounded-circle border me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light"></i>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/account/profile">
                    <i ></i> My Profile
                  </Link>
                </li>
                
                <li>
                  <Link className="dropdown-item" to="/account/orders">
                    <i ></i> Orders
                  </Link>
                </li>
              
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/notification">
                    <i></i>
                    Notification
                  </Link>
                </li>
              
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    <i ></i>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
