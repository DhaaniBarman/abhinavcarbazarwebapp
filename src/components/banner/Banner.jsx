import React from 'react'
import { FaPhone } from "react-icons/fa6";
const Banner = () => {
  return (
    <div>
      <div className="container-fluid my-md-5 my-sm-3 pb-5">
        <div class="bg-banner  px-4 text-center">
          <div class="py-5">
            <h1 class="display-1 text-uppercase text-warning mb-4">20% OFF</h1>
            <h1 class="text-uppercase text-light mb-4">Special Offer For New Members</h1>
            <a href="tel:+919302152269" className='btn p-3 cbtn'>
              <FaPhone />+91-9302152269
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
