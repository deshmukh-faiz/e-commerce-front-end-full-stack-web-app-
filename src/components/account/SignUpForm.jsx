import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../apiConfig";


import {
  required,
  maxLength20,
  minLength8,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  name,
} from "../../helpers/validation";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconShieldLock } from "bootstrap-icons/icons/shield-lock.svg";

const SignUpForm = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${apiConfig.apiBaseUrl}/accountsignup/signupRoutes`, values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/account/signin");
        } else {
          alert("Please enter valid");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div className="col-md-6">
          <div class="form-group">
            <label for="email">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mt-3">
        Submit
      </button>

      <Link className="float-start" to="/account/signin" title="Sign In">
        Sing In
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

export default SignUpForm;
