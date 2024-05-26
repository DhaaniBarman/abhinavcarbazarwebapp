import React from 'react';
import abhinavcarservice from '../../assests/images/abhinacarservices.png';
import { FaPhone } from "react-icons/fa6";
const Whychoose = () => {
  return (
    <div>
         <div className="container-fluid my-md-5 my-sm-3  py-sm-3">
        <div className="row pl-3 pr-3 prow">
          <div className="col-md-6 col-xs-12 col-sm-12">
            <img src={abhinavcarservice} alt="abhinavcarservice" className="img-fluid m-0" width="600" />
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12">
            <h1 className="display-5 text-uppercase why">Why Choose Us</h1>
            <p className='text-justify custom-line-height pwhy'>At Abhinav Car Services, we offer a comprehensive range of transportation solutions tailored to your needs. Whether you're looking to sell your used car, rent a vehicle for a trip, or need reliable transportation with our taxi service, we've got you covered.</p>
            <ul className='px-3 custom-line-height py-3 text-justify'>
              <li>Comprehensive Transportation Solutions: From selling used cars to renting vehicles for trips and providing reliable taxi services, we offer a wide range of transportation solutions to meet your needs.</li>
              <li>Hassle-Free Car Selling: Our Car Bazaar provides a seamless platform for buying and selling pre-owned cars, ensuring transparent and efficient transactions for sellers.</li>
              <li>Convenient Car Rental: Explore Jabalpur and beyond with ease by renting a vehicle from our well-maintained fleet, offering flexible options for short-term and long-term rentals.</li>
              <li>Reliable Taxi Service: Whether it's a short ride across town or an airport transfer, our taxi service provides safe and dependable transportation, with experienced drivers and comfortable vehicles.</li>
              <li>Expert Guidance: Our team of experienced professionals is dedicated to providing expert guidance and assistance at every step of your transportation journey. Whether you're buying a car, renting a vehicle, or utilizing our taxi service, count on us for reliable advice and support.</li>
              <li>Customer-Centric Approach: At Abhinav Car Services, customer satisfaction is our top priority. We strive to exceed your expectations with personalized services and exceptional customer support.</li>
            </ul>
            <div className='py-4'>
              <div className=''>
                <a href="tel:+919302152269" className='btn p-3 cbtn'>
                  <FaPhone />+91-9302152269
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
