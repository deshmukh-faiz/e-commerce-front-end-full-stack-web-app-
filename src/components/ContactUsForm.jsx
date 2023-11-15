import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import {
  renderFormGroupField,
  renderFormTextArea,
  renderFormCheckbox,
} from "../helpers/renderForm";
import {
  required,
  maxLength50,
  name,
  maxLengthMobileNo,
  minLengthMobileNo,
  digit,
  email,
  maxLength1000,
} from "../helpers/validation";
import { ReactComponent as IconPerson } from "bootstrap-icons/icons/person.svg";
import { ReactComponent as IconBuilding } from "bootstrap-icons/icons/building.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

const ContactUsForm = (props) => {
  const { handleSubmit, submitting, onSubmit, submitFailed } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className={`needs-validation ${submitFailed ? "was-validated" : ""}`}
      noValidate
    >
      <div className="row">
        <div className="col-md-6">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
        <div className="col-md-6">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
        <div className="col-md-6">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-12">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
        <div className="col-md-12">
        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
        </div>
      </div>
      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
