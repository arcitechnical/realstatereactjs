import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css'; 
import './style.css';
function Portfolio()
    {
        return(
            <>
                <section id="portfolio" className="portfolio section-padding">
                    <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                  <h2>Our Projects</h2>
                                  <p> 
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                <br/>when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-center bg-white pb-2">
                                    <div className="card-body text-dark">
                                        <div className="img-area mb-4">
                                            <img src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=600" className="img-fluid"/>
                                        </div>
                                        <h3 className="card-title">Making Buiding</h3>
                                        <p className="lead"> 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. 
                                        </p>
                                        <button className="btn btn-warning text-dark"><strong>Learn More</strong></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-center bg-white pb-2">
                                    <div className="card-body text-dark">
                                        <div className="img-area mb-4">
                                            <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid"/>
                                        </div>
                                        <h3 className="card-title">Making Buiding</h3>
                                        <p className="lead"> 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. 
                                        </p>
                                        <button className="btn btn-warning text-dark"><strong>Learn More</strong></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-center bg-white pb-2">
                                    <div className="card-body text-dark">
                                        <div className="img-area mb-4">
                                            <img src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=600" className="img-fluid"/>
                                        </div>
                                        <h3 className="card-title">Making Buiding</h3>
                                        <p className="lead"> 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type 
                                            specimen book. 
                                        </p>
                                        <button className="btn btn-warning text-dark"><strong>Learn More</strong></button>
                                    </div>
                                </div>
                            </div>
                          
                       
                        </div>
                    </div>   
                </section>
            </>
        )
    }
export default Portfolio;