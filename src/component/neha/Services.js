import React from "react";
import "./custom.css";
function Services() {
  return (
    <div className="section">
      <div className="container">
        <div className="services">
          <div className="cols">
            <h1>Services</h1>
            <p>
              There are many variations of passages of Lorem ipsum available but
            </p>
            <a href="#">
              Requset Custom Service
              <hr className="red-hr" />
            </a>
          </div>
          <div className="cols">
            <img src="images/corporate-01.jpg" />
            <h3>Thinking Development</h3>
            <p>I throw myself down among the tall grass by the stream</p>
            <a href="#">
              Read More
              <hr className="red-hr" />
            </a>
          </div>
          <div className="cols">
            <img src="images/corporate-02.jpg" />
            <h3>Business Consulting</h3>
            <p>I throw myself down among the tall grass by the stream.</p>
            <a href="#">
              Read More
              <hr className="red-hr" />
            </a>
          </div>
          <div className="cols">
            <img src="images/corporate-03.jpg" />
            <h3>Business Development</h3>
            <p>I throw myself down among the tall grass by the stream.</p>
            <a href="#">
              Read More
              <hr className="red-hr" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
