import React from 'react'
import { IoCarSportSharp } from "react-icons/io5";
import { RiPoliceCarFill } from "react-icons/ri";
import { FaTaxi } from "react-icons/fa";
import { Link } from 'react-router-dom';
const services = () => {
    return (
        <>
            <div className="container-fluid mt-5"> 
                    <h1 class="display-5 text-uppercase text-center pb-5" id='servicehead'>Our Services</h1>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center justify-content-center bg-warning ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <IoCarSportSharp size={32} />
                                    </div>
                                    <h1 class="display-2 text-white mt-n2 m-0">01</h1>
                                </div>
                                <h4 class="text-uppercase mb-3">Used Car Buyer & Selleer</h4>
                                <ul className="custom-line-height px-3">
                                    <li>Wide Range of Cars</li>
                                    <li>Fair Pricing</li>
                                    <li>Easy Financing Options</li>
                                    <li>24/7 Customer Support</li>
                                    <li>Expert Guidance</li>
                                    <li>Hassle-Free Paperwork</li>
                                    <li>Test Drive Availability</li>
                                    <li>Special Deals and Discounts</li>
                                    <li>Vehicle History Reports</li>
                                </ul>
                                <div class="d-flex align-items-center justify-content-end my-3">
                                    <Link to="/carbazar" className="sbtn d-flex align-items-center justify-content-center bg-warning mr-n4 text-dark text-decoration-none" >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center justify-content-center bg-warning ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <RiPoliceCarFill size={32} />
                                    </div>
                                    <h1 class="display-2 text-white mt-n2 m-0">02</h1>
                                </div>
                                <h4 class="text-uppercase mb-3">Tour & Travel</h4>
                                <ul className="custom-line-height px-3 text-white ">
                                    <li>Tailor-Made Trips</li>
                                    <li>Friendly Guides</li>
                                    <li>Comfortable Rides</li>
                                    <li>Budget-Friendly Deals</li>
                                    <li>Help Anytime</li>
                                    <li>Local Experiences</li>
                                    <li>Easy Booking</li>
                                    <li>Nice Places to Stay</li>
                                    <li>Special Discounts</li>
                                </ul>
                                <div class="d-flex align-items-center justify-content-end my-3">
                                <Link to="/tourandtravels" className="sbtn d-flex align-items-center justify-content-center bg-warning mr-n4 text-dark text-decoration-none" >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center justify-content-center bg-warning ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <FaTaxi size={32} />
                                    </div>
                                    <h1 class="display-2 text-white mt-n2 m-0">03</h1>
                                </div>
                                <h4 class="text-uppercase mb-3">Taxi Service</h4>
                                <ul className="custom-line-height px-3 py-3">
                                    <li>24/7 Availability</li>
                                    <li>Professional Drivers</li>
                                    <li>Clean and Well-Maintained Vehicles</li>
                                    <li>Competitive Rates</li>
                                    <li>Flexible Booking Options</li>
                                    <li>Safe and Reliable Service</li>
                                    <li>Local Knowledge</li>
                                    <li>Special Offers</li>
                                </ul>
                                <div class="d-flex align-items-center justify-content-end my-3 ">
                                  <Link to="/taxi" className="sbtn d-flex align-items-center justify-content-center bg-warning mr-n4 text-dark text-decoration-none" >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default services
