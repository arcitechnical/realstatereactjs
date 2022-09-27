import React from "react";

function Navbar() {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar">
          <img src="images/logo-symbol-dark.png" />
          <div className="nav-div">
            <ul className="nav-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Blocks</a>
              </li>
              <li>
                <a href="/contactus">Contact</a>
              </li>
            </ul>
            <button className="buynow-btn">BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
