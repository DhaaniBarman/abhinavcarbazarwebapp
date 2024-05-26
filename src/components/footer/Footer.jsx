import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaAngleRight, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <div className="container-fluid footerbg">
        <div className="row pt-5">
          <div className="col-lg-4 col-md-12 mb-3 fcontent">
            <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
            <p className="mb-2 text-light">
              <FaMapMarkerAlt className="text-white mr-3" />
              <a
                href="https://maps.app.goo.gl/wYguybxkqhWHunU26"
                className="text-light text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pushpnagar, Kachhpura Over Bridge, <br />
                <span className='pl-4'> Kachnarcity, Jabalpur, Madhya Pradesh <span className='pin'> 482001</span></span>

              </a>
            </p>
            <p className="mb-2 text-light ">
              <FaPhoneAlt className="text-white mr-3" />
              <a href="tel:+919302152269" className="text-light text-decoration-none">+91-9302152269</a>
            </p>
            <p className="text-light">
              <FaEnvelope className="text-white mr-3 " />
              <a href="mailto:nitin52269@gmail.com" className="text-light text-decoration-none">nitin52269@gmail.com</a>
            </p>
          </div>

          <div className="col-lg-4 col-md-12 mb-3 fcontent">
            <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start ">
              <Link className="text-light mb-2 text-decoration-none" to="/carbazar">
                <FaAngleRight className="text-white mr-2" />Car Bazar
              </Link>
              <Link className="text-light mb-2 text-decoration-none" to="/tourandtravels">
                <FaAngleRight className="text-white mr-2" />Tour & Travel
              </Link>
              <Link className="text-light mb-2 text-decoration-none" to="/taxi">
                <FaAngleRight className="text-white mr-2" />Taxi Service
              </Link>
              <Link className="text-light mb-2 text-decoration-none" to="/about">
                <FaAngleRight className="text-white mr-2" />About Us
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-3 fcontent">
            <h6 className="text-uppercase text-light py-2">Follow Us</h6>
            <div className="d-flex justify-content-start">
              <a className="btn  btn-warning btn-lg-square mr-2" href="#"><FaFacebookF /></a>
              <a className="btn  btn-warning btn-lg-square mr-2" href="#"><FaInstagram /></a>
              <a className="btn  btn-warning btn-lg-square" href="#"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-warning py-4 px-sm-3 px-md-5">
        <p className="mb-2 text-center text-dark">&copy; <a href="#" className="text-dark text-decoration-none">Abhinav Car Bazar</a> All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
