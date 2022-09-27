import React from "react";
import "./custom.css";

import Services from "./Services";
import About from "./About";

import Banner from "./Banner";
import KnowMore from "./KnowMore";
import Statistics from "./Statistics";
import GetToWork from "./GetToWork";
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
