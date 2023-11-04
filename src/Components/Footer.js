import React from "react";

function Footer(){
    return(
        <div id="footer">
            <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#45526e"}}
          >

    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Travel Ease
            </h6>
            <p>
            Build, organize, and map your itineraries in a free travel app designed for vacations & road trips
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
            <p>
              <a className="text-white">Blogs</a>
            </p>
            <p>
              <a className="text-white">Travel Guides</a>
            </p>
            
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a className="text-white">Your Account</a>
            </p>
            <p>
              <a className="text-white">Help</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> Meerut, Uttar Pradesh, India</p>
            <p><i className="fas fa-envelope mr-3"></i> sarohaakshat@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 91 863032831</p>
            <p><i className="fas fa-print mr-3"></i> + 91 863032831</p>
          </div>

        </div>
      </section>

      <hr className="my-3"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2023 Copyright: Akshat Saroha
              <a className="text-white" href="https://mdbootstrap.com/">
                </a>
            </div>

          </div>
 
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               className="btn btn-outline-light btn-floating m-1"
               role="button"
               ><i className="fab fa-facebook-f"></i></a>
            <a
               className="btn btn-outline-light btn-floating m-1"
               role="button"><i className="fab fa-twitter"></i
              ></a>
            <a
               className="btn btn-outline-light btn-floating m-1"
               role="button"
               ><i className="fab fa-google"></i></a>

            <a className="btn btn-outline-light btn-floating m-1"
               role="button"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
      
    </div>
    
  </footer>
        </div>
    );
}
export default Footer;