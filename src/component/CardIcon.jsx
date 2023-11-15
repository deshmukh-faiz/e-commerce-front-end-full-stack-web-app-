import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardIcon = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define a CSS class for the spacing between divs
  const divSpacingStyle = {
    margin: "8px",
  };

  const containerStyle = isMobile
    ? {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    : {
        display: "flex",
      };

  return (
    <div className="d-flex" style={containerStyle}>
      <div className="text-decoration-none" style={divSpacingStyle}>
        <div className="card text-center">
          <div className="card-body">
            <img src="./images/category/wrench.jpg" alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "27vh" }}>
          <Link to="./AddtoCard"><button className="btn btn-primary">See Details</button></Link>
        </div>
      </div>

      <div className="text-decoration-none" style={divSpacingStyle}>
        <div className="card text-center">
          <div className="card-body">
            <img src="./images/category/l1.jpg" alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "27vh" }}>
          <Link to="./AddtoCard"><button className="btn btn-primary">See Details</button></Link>
        </div>
      </div>

      <div className="text-decoration-none" style={divSpacingStyle}>
        <div className="card text-center">
          <div className="card-body">
            <img src="./images/category/tv.jpg" alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "27vh" }}>
          <Link to="./AddtoCard"><button className="btn btn-primary">See Details</button></Link>
        </div>
      </div>

      <div className="text-decoration-none" style={divSpacingStyle}>
        <div className="card text-center">
          <div className="card-body">
            <img src="./images/category/M.jpg" alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "27vh" }}>
          <Link to="./AddtoCard"><button className="btn btn-primary">See Details</button></Link>
        </div>
      </div>

      <div className="text-decoration-none" style={divSpacingStyle}>
        <div className="card text-center">
          <div className="card-body">
            <img src="./images/category/c7.png" alt="" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh", width: "27vh" }}>
          <Link to="./AddtoCard"><button className="btn btn-primary">See Details</button></Link>
        </div>
      </div>
      

      {/* Repeat similar structures for other items... */}
    </div>
  );
};

export default CardIcon;
