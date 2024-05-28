import React from 'react'
import { FaPhone } from "react-icons/fa6";
const Banner = () => {
  return (
    <div>
      <div className="container-fluid my-md-5 my-sm-3 pb-5">
        <div class="bg-banner px-4 text-center">
          <div class="p-5">
            <h3 class="bannertxt font-italic display-4 text-warning mb-4">"Your dream car is just a visit away at <br />Abhinav Car Bazar where quality meets affordability."</h3>
            <h3 class="text-uppercase text-light mb-4 conh">Contact US</h3>
            <a href="tel:+919302152269" className='btn p-3 cbtn'>
              <FaPhone  className='cbtn'/>+91-9302152269
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
