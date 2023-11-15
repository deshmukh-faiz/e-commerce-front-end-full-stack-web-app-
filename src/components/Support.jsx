import { ReactComponent as IconCash } from "bootstrap-icons/icons/cash.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";

const Support = (props) => {
  return (
    <div className={`row g-3 ${props.className}`}>
      <div className="col-md-4 d-flex align-items-center">
        <div className="card bg-dark">
          <div className="card-body text-white d-flex align-items-center">
            <span>
              
            </span>
            <span className="ms-2">
              Reasonable prices 
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div className="card bg-danger">
          <div className="card-body text-white d-flex align-items-center">
            <span>
          
            </span>
            <span className="ms-2">Customer support 24/7</span>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex align-items-center">
        <div className="card bg-primary">
          <div className="card-body text-white d-flex align-items-center">
            <span>
              
            </span>
            <span className="ms-2">Quick delivery at place</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
