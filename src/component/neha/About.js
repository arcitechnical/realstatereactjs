import React from "react";
import "./custom.css";

function About() {
  return (
    <div className="section">
      <div className="container">
        <div className="aboutus">
          <div className="cols">
            <h1> About</h1>
            <p>
              There are many variations of passages of Lorem ipsum available but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <h3>Lorem ipsum dolor sit amet</h3>
            <ul className="check-list">
              <li>The philosophy of business analytics</li>
              <li>Fast track ur business</li>
              <li>Lies and damn lies about business</li>
              <li>The Ultimate deal on business</li>
            </ul>
            <h3>Lorem ipsum dolor sit amet</h3>
            <ul className="check-list">
              <li>The philosophy of business analytics</li>
              <li>Fast track ur business</li>
              <li>Lies and damn lies about business</li>
              <li>The Ultimate deal on business</li>
            </ul>
          </div>
          <div className="cols">
            <img src="images/about-3.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
