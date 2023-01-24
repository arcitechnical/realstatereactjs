import React from "react";
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import './style.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contactus";
import Form from "./Form";
import Footer from "./Footer";
import Signin from "./Signin";
import Resetpassword from "./Resetpassword";
function Layout()
    {
        return(
            <>
                <Header />
                 <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/contactus" element={<Contact />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/reset" element={<Resetpassword />} />

                 </Routes>
                 <Footer />
                                
            </>
        )
    }
export default Layout;