import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css'; 
import './style.css';
function Services()
    {
        return(
            <>
                <section id="about" className="service section-padding">
                    <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="section-header text-center pb-5">
                                  <h2>Our Services</h2>
                                  <p> 
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                <br/>when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                      <i className="fa fa-window-restore" aria-hidden="true"></i>
                                      <h3 className="card-title">Best Quality</h3>
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
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                    <i class="fa fa-slack" aria-hidden="true"></i>
                                      <h3 className="card-title">Sustainability</h3>
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
                                <div className="card text-white text-center bg-dark pb-2">
                                    <div className="card-body">
                                    <i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>
                                      <h3 className="card-title">Integrity</h3>
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
export default Services;