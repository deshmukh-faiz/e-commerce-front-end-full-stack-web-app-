import { Link } from "react-router-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Deals End!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className="text-muted small">
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  }
};

const CardDealsOfTheDay = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title pb-3 border-bottom">
          {props.title} <i className="bi bi-stopwatch text-primary" />{" "}
          <Countdown date={props.endDate} renderer={renderer} />
          <span className="float-end">
            <Link to={props.to} className="btn btn-sm btn-outline-primary">
              View All
            </Link>
          </span>
        </h5>
        {/* {props.children} */}
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
      <Link to={props.to} className="text-decoration-none">
        <div className="card text-center">
          <div className="card-body">
            {/* Your card content */}
            <img src="./images/category/c3.jpg" alt="" />
          </div>
        </div>
      </Link>

      <Link to={props.to} className="text-decoration-none">
        <div className="card text-center">
          <div className="card-body">
            {/* Your card content */}
            <img src="./images/category/wrench.jpg" alt="" />
          </div>
        </div>
      </Link>

      <Link to={props.to} className="text-decoration-none">
        <div className="card text-center">
          <div className="card-body">
            {/* Your card content */}
            <img src="./images/category/tv.jpg" alt="" />
          </div>
        </div>
      </Link>

      <Link to={props.to} className="text-decoration-none">
        <div className="card text-center">
          <div className="card-body">
            {/* Your card content */}
            <img src="./images/category/blue.jpg" alt="" />
          </div>
        </div>
      </Link>

      <Link to={props.to} className="text-decoration-none">
        <div className="card text-center">
          <div className="card-body">
            {/* Your card content */}
            <img src="./images/category/b.jpeg" alt="" />
          </div>
        </div>
      </Link>

      <Link to={props.to} className="text-decoration-none">
    <div className="card text-center">
      <div className="card-body">
        {/* Your card content */}
        <img src="./images/category/l1.jpg" alt="" />
      </div>
    </div>
  </Link>
    </div>
      </div>
    </div>
  );
};

export default CardDealsOfTheDay;