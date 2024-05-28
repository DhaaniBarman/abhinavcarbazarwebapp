import React from 'react'
import { FaPhone } from "react-icons/fa6";
import buyerandseller from '../../assests/images/buyerandseller.png'
import Cargallery from '../cargallery/Cargallery';
import Banner from '../banner/Banner';
import Feedback from '../feedback/Feedback';
const Carbazar = () => {
  return (
    <>
      <div className="container-fluid mt-5">
      <div className="row ">
        <div className="col-md-6 col-xs-12 col-sm-12 pl-4">
          <img src={buyerandseller} alt="buyerandseller" className="img-fluid" width="600" />
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12">
          <h3 className=" text-uppercase px-3 pr-3 best">Best Used Car Buyer & Seller Service in Jabalpur</h3>
          <p className='text-justify px-3 pr-3 custom-line-height'>
            Discover the best used car buying and selling service in Jabalpur, offering a seamless and trustworthy experience.
            Whether you're looking to buy a reliable pre-owned car or sell your current vehicle at the best price, we've got you covered.
            Our expert team ensures a hassle-free process, providing transparent deals and top-notch customer service.
            Experience a smooth transaction with us, where every deal is a win-win.
          </p>
          <ul className="custom-line-height px-5  py-3 text-justify">
            <li>Wide Range of Cars</li>
            <li>Fair Pricing</li>
            <li>Easy Financing Options</li>
            <li>Comprehensive Inspections</li>
            <li>24/7 Customer Support</li>
            <li>Expert Guidance</li>
            <li>Hassle-Free Paperwork</li>
            <li>Test Drive Availability</li>
            <li>Special Deals and Discounts</li>
            <li>Vehicle History Reports</li>
            <li>Trade-In Options</li>
            <li>After-Sales Service</li>
          </ul>
          <div className='pt-5 px-3'>
            <div className=''>
              <a href="tel:+919302152269" className='btn p-3 cbtn'>
                <FaPhone />+91-9302152269
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cargallery />
    <Banner />
    <Feedback />
    </>
  )
}

export default Carbazar
