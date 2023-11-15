import React from "react";
import renderFormField from "../../helpers/renderFormField";
import {
  required,
} from "../../helpers/validation";

const CouponApplyForm = (props) => {
  
  return (
    <form
      >
      <input
        name="coupon"
        type="text"
        label="Have coupon?"
        component={renderFormField}
        placeholder="Coupon code"
        validate={[required]}
              required={true}
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary mt-3 float-end"
     
      >
        Apply
      </button>
    </form>
  );
};

export default CouponApplyForm;
