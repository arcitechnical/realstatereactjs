import React from "react";
import "./custom.css";

function Banner() {
  return (
    <div className="section">
      <div className="container">
        <div className="banner">
          <div className="banner-text">
            <svg
              id="Icons"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>.cls-1$$$$ fill=#ccc9c9;</style>
              </defs>
              <path
                class="cls-1"
                d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
              />
              <path
                class="cls-1"
                d="M18,11H8.414l2.293-2.293A1,1,0,1,0,9.293,7.293l-4,4a1,1,0,0,0,0,1.414l4,4a1,1,0,0,0,1.414-1.414L8.414,13H18a1,1,0,0,0,0-2Z"
              />
            </svg>

            <svg
              id="Icons"
              style="enable-background:new 0 0 32 32;"
              version="1.1"
              viewBox="0 0 32 32"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <style type="text/css">
                .st0
                fill=none;stroke:#ccc9c9;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;
              </style>
              <circle class="st0" cx="16" cy="16" r="13" />
              <line class="st0" x1="9" x2="22" y1="16" y2="16" />
              <polyline class="st0" points="18,12 22,16 18,20 " />
            </svg>

            <h1>AGENCY.</h1>
            <p>
              There are many variations of passages but the majority
              <br />
              have suffered alteration.
            </p>
            <div>
              <button className="contact_btn">CONTACT US</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
