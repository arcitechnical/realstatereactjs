import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './style.css';
function Contact()
    {
        return(
            <>
                <section id="contact" className="contact section-padding">
                    <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className=" contactus text-center pb-5">
                                  <h2>Contact Us</h2>
                                  <p> 
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                <br/>when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. </p>
                            </div>
                          </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-md-12 pt-4 p-0 p-4 m-auto">
                               <div className="row">
                                  <div className="col-md-12">
                                    <div className="mb-3">
                                            <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Your Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                            </Form.Group>
                                            <FloatingLabel
                                            controlId="floatingTextarea"
                                            label="Query"
                                            className="mb-3"
                                            >
                                            <Form.Control as="textarea" placeholder="Any Query?" />
                                            </FloatingLabel>
                                            </Form>
                                            
                                    </div>   
                                  </div>
                                  <button className="btn btn-warning btn-lg btn-block mt-3">Send Now</button>  
                                </div>  
                            </div>    
                        </div>
                    </div>   
                </section>
            </>
        )
    }
export default Contact;