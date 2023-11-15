import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient text-light text-center p-4 mt bg-info bg-gradient p-3 text-center mb-3">
     
      <div className=" text-light text-center p-4 mt">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6">FD's E-Commerce</div>
            <hr />
            <p>
            FD's E-Commerce is nothing, but its a full stack practice project for understanding how e-commerce website works.
            </p>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Products</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Devices
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Mobiles/Phones
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Cloths
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Super Market
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                   Privacy
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Security
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
              Return Policy
                </Link>
              </li>
              <li className="list-group-item bg-info bg-gradient text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              Maharashtra,
              <br />
              India, 
              <br />
              <abbr title="Phone">P:</abbr> (123) 1-11-111--4321
            </address>
            <div className="h6">Get in touch</div>
            <hr />
            <i className="bi bi-telephone"></i> +11-1800 100 1000
            <br />
            <i className="bi bi-envelope"></i> sample@gmail.com
          </div>
        </div>
      </div>
      <footer className="bg-dark text-light text-center p-4 mt">
      <div className="container">
        <p>&copy; 2023 FD's E-Commerce. All rights reserved.</p>
        <div className="social-icons mt-3">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mx-2" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="mx-2" />
          </a>
        </div>
      </div>
    </footer>
    </footer>
  );
};
export default Footer;
