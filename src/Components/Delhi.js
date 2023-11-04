import React from 'react';
import SideNavbar from './SideNavbar';
import '../Styles/delhi.css'; // Import your main CSS file for styling
import Footer from './Footer';
import Budget from './Budget';


const App = () => {
  return (
    <>
    <div className="app-container">
      <SideNavbar />
      <div className="content" id='content-1'>
        <img src='./Assets/Delhi-Img-1.webp' alt='Delhi-img' id='image-delhi-1'></img>
        <div id='heading-1'>
            <h2>Trip to New Delhi</h2>
            <p>14/11 - 17/11</p>
        </div>
        <h2  style={{fontWeight:"bold"}}>Explore</h2>
        <div id='cards'>
            <div className="card-delhi">
                <a href="https://zolostays.com/blog/places-to-visit-in-delhi/"><img className="card-img-top" src="./Assets/Delhi-places.jpg" alt="Card-image"></img></a>
                <div className="card-body">
                    <p className="card-text">Top Places Of New Delhi</p>
                </div>
            </div>
            <div className="card-delhi">
            <a href="https://www.bakingo.com/blog/best-restaurants-in-delhi/"><img className="card-img-top" src="./Assets/delhi-restaurents.jpg" alt="Card-image" style={{height:"138px"}}></img></a>
                <div className="card-body">
                    <p className="card-text">Top Restaurants of New Delhi</p>
                </div>
            </div>
            <div className="card-delhi">
            <a href="https://www.bakingo.com/blog/best-restaurants-in-delhi/"><img className="card-img-top" src="./Assets/delhi-things.jpg" alt="Card-image" style={{height:"138px"}}></img></a>
                <div className="card-body">
                    <p className="card-text">Things to do in New Delhi</p>
                </div>
            </div>
            </div>
            <br/>
            <h2 style={{fontWeight:"bold"}}>Reservations and Bookings</h2>
            <div className='reservations'>
              <div><img src='./Assets/airplane.svg' alt=''></img>
                <p>Flights</p>
              </div>
              <div><img src='./Assets/hotel.svg' alt=''></img>
                <p>Lodging</p>
              </div>
              <div><img src='./Assets/train.png' alt=''></img>
                <p>Trains</p>
              </div>
              <div><img src='./Assets/car.svg' alt=''></img>
                <p>Rental Cars</p>
              </div>
            </div>
            

            <div class="form-group">
              <label for="exampleFormControlTextarea1"><h2  style={{fontWeight:"bold"}}>Notes</h2></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write anything here for your rememberance'></textarea>
            </div>

            <Budget/>
        </div>
            
          

      <div className="content">
        <img src='./Assets/delhiMap.jpeg' alt='Delhi-Map' id='image-delhi'></img>
      </div>
     
    </div>
    <Footer/>
    
   </>
  );
};

export default App;
