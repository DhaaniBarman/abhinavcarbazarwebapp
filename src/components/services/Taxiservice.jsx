import React from 'react'
import taxiservice from '../../assests/images/taxiservice1.png';
import { FaPhone } from "react-icons/fa6";
const Taxiservice = () => {
  return (
    <>
     <div className="container-fluid mt-5">
     <div className="row pl-3 pr-3 prow">
     <div className="col-md-6 col-xs-12 col-sm-12">
          <h3 className=" text-uppercase prow">Best Taxi Service in Jabalpur</h3>
          <p className='text-justify py-sm-3 custom-line-height prow'>Discover Jabalpur's wonders hassle-free with our trusted taxi service. Sit back, relax, and let our courteous drivers take you on a memorable journey through the city's vibrant culture and enchanting landscapes. With us, every ride is a delightful adventure, ensuring you create lasting memories. Our commitment to safety and convenience makes us the perfect choice for exploring Jabalpur.</p>
          <ul className="custom-line-height px-3 text-justify">
            <li>24/7 Availability</li>
            <li>Professional Drivers</li>
            <li>Clean and Well-Maintained Vehicles</li>
            <li>Competitive Rates</li>
            <li>Flexible Booking Options</li>
            <li>Safe and Reliable Service</li>
            <li>Local Knowledge</li>
            <li>Customized Itineraries</li>
            <li>Special Offers</li>
          </ul>
          <div className='py-3'>
            <a href="tel:+919302152269" className='btn p-3 cbtn'>
              <FaPhone /> +91-9302152269
            </a>
          </div>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12 text-center taxicol">
          <img src={taxiservice} alt="Taxi Service" className="img-fluid" width="500" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Taxiservice
