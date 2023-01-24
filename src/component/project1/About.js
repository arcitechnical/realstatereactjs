import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import './style.css';
function About(){
    return(
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                     <div className="about-img">
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid"/>
                     </div>
                     <div className="about-img mt-5">
                        <img src="https://images.unsplash.com/photo-1598714805247-5dd440d87124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBnYXJkZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid"/>
                     </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12 ps-lg-5 ">
                        <div className="about-text">
                            <h2>We Provide Best Quality<br/>Service Ever</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <a href="#" className="btn btn-warning"><strong>Learn More</strong></a>
                        </div>
                        <div className="about-text mt-5">
                            <h2>We Provide Best Builder<br/> Ever</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <a href="#" className="btn btn-info"><strong>Learn More</strong></a>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    )
}
export default About;