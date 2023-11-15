import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../apiConfig";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${apiConfig.apiBaseUrl}/signin/signin`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">Sign In</div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary mb-3">
          Log In
        </button>
      </div>
      <Link className="float-start" to="/account/signup" title="Sign Up">
        Create your account
      </Link>
      <Link
        className="float-end"
        to="/account/forgotpassword"
        title="Forgot Password"
      >
        Forgot password?
      </Link>
      <div className="clearfix"></div>
      <hr></hr>
      
    </form>
  );
};

export default SignInForm;
