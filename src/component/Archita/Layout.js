import React from "react";
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import './style.css';
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contactus";
function Layout()
    {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#"><span className="text-warning">Build</span>Con</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                            </li> 
                            <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                            </li> 
                            <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li> 
                            <li className="nav-item">
                            <a className="nav-link" href="#">Form</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/contactus">Contact Us</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contactus" element={<Contact />} />
                
                 </Routes>
                 <footer className="bg-dark text-center p-2">
                    <div className="container">
                        <p className="text-white">All Right Reserved @BuildCon</p>
                    </div>
                </footer>                
            </>
        )
    }
export default Layout;