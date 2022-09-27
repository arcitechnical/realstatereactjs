import React from "react";
import "./custom.css";

import Services from "./Services";
import About from "./About";
import Navbar from "./Navbar";
import Banner from "./Banner";
import KnowMore from "./KnowMore";
import Statistics from "./Statistics";
import GetToWork from "./GetToWork";
import Footer from "./Footer";

function Home() {
  return (
    <>
      {/* <!--Navbar--> */}
      <Navbar />
      {/* <!--banner--> */}
      <Banner />
      {/* <!--know more Section--> */}
      <KnowMore />
      {/* <!--Services Section--> */}
      <Services />
      {/* <!--Statistics section--> */}
      <Statistics />
      {/* <!--About Section--> */}
      <About />
      {/* <!--lets get to work section--> */}
      <GetToWork />
      <Footer />
    </>
  );
}
export default Home;
