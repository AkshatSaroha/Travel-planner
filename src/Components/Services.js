import React from "react";
import "../Styles/services.css";

function Services(){
    return(
        <div id="services">
        <div className="heading">
            <h2>Services</h2>
            <h3>Services Provided To Ease Your Trip</h3>
        </div>
        
      
        <div class="container">
        <div class="row row-cols-3">
            <div class="col">
            <div class="card">
                <img class="card-img-top" src="./Assets/pic1.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">Explore the Speciality of places</p>
                </div>
            </div>
            </div>

            <div class="col">
            <div class="card">
            <img class="card-img-top" src="./Assets/pic2.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">All your Bookings at one place</p>
                </div>
            </div>
            </div>

            <div class="col">
            <div class="card">
                <img class="card-img-top" src="./Assets/pic3.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">Track your Expenses </p>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img class="card-img-top" src="./Assets/pic4.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">Make notes of your Journey</p>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img class="card-img-top" src="./Assets/pic5.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">Offline access to Map</p>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card">
                <img class="card-img-top" src="./Assets/pic6.png" alt="Card"></img>
                <div class="card-body">
                    <p class="card-text">All your reservations and Booking Details</p>
                </div>
            </div>
            </div>
            
            
        </div>
        </div>

        </div>
    );
}
export default Services;