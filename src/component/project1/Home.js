import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; 
import './style.css';
function Home()
    {
        return(
            <>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <h5>Your Dream House</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <p><a href="#" className="btn btn-warning mt3"><strong>Learn More</strong></a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <h5>Always dedicated</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                                <p><a href="#" className="btn btn-warning mt3"><strong>Learn More</strong></a></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                            <h5>True Construction</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <p><a href="#" className="btn btn-warning mt3"><strong>Learn More</strong></a></p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
            </>
        )
    }
export default Home;