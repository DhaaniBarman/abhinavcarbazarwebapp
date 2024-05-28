import React from 'react'
import carrental from '../../assests/images/carrental.png';
import { FaPhone } from "react-icons/fa6";
const Carrental = () => {
    return (
        <>
             <div className="container-fluid mt-5">
             <div className="row pl-3 pr-3 prow">
             <div className="col-md-6 col-xs-12 col-sm-12">
                        <img src={carrental} alt="carrental" className="img-fluid" width="600" />
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-12">
                        <h3 className=" text-uppercase why">Best Tour & Travel Service in Jabalpur</h3>
                        <p className='text-justify pr-5 py-3 custom-line-height why'> Discover Jabalpur with the BEST tour & travel service, offering personalized and seamless travel experiences.
                            From breathtaking natural landscapes to historical landmarks, we ensure every journey is memorable.
                            Our expert guides and top-notch customer service provide a hassle-free adventure tailored to your interests.
                            Experience the best of Jabalpur with us, where every trip is a delight.</p>
                        <ul className="custom-line-height px-3  text-justify">
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
        </>
    )
}

export default Carrental

