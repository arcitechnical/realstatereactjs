import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import ContactUs from "./ContactUs";

function Landing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
    </>
  );
}
export default Landing;
