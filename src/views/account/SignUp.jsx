import { lazy } from "react";
import { Link } from "react-router-dom";
const SingUpForm = lazy(() => import("../../components/account/SignUpForm"));

const SignUpView = () => {
  const onSubmit = async (values) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="container my-3">
      <div className="row border">
        
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign Up</h4>
          <SingUpForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
