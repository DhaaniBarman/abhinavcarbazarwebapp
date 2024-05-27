import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaWhatsappSquare, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IoMenu } from "react-icons/io5";
import logo from '../../assests/images/logo.png';
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <img src={logo} height="70" alt="logo"
                        loading="lazy" />
                    <button class="navbar-toggler ps-0" type="button" data-toggle="collapse" data-target="#navbarExample01"
                        aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon d-flex justify-content-start align-items-center">
                            <IoMenu />
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarExample01">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active"><Link to="/" className="nav-link mr-3 mymenu">Home</Link></li>
                            <li className="nav-item dropdown mr-3 mymenu">
                                <a className="nav-link dropdown-toggle mymenu" href="" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <div className="dropdown-menu ">
                                    <Link className="dropdown-item mymenu" to="/carbazar">Car Bazar</Link>
                                    <Link className="dropdown-item mymenu" to="/tourandtravels">Tour and Travel</Link>
                                    <Link className="dropdown-item mymenu" to="/taxi">Taxi Services</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown mr-3">
                                <a className="nav-link dropdown-toggle mymenu" href="" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item mymenu" to="/allcar">Car Gallery</Link>
                                    <Link className="dropdown-item mymenu" to="/allplace">Tourist Places</Link>
                                </div>
                            </li>
                            <li className="nav-item mr-md-3 mymenu"><Link to="/about" className="nav-link  mymenu">About Us</Link></li>
                            <li className="nav-item mymenu"><Link to="/contact" className="nav-link mymenu">Contact Us</Link></li>
                        </ul>
                        <ul className="navbar-nav flex-row flex-wrap">
                        <li className="nav-item">
                            <a className="text-dark text-decoration-none nav-link" href="tel:+91-9302152269">
                                <FaPhoneAlt className="" />+91-9302152269
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="text-dark text-decoration-none nav-link px-2 ps-sm-0" href="tel:+91-9165812126">
                             9165812126
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-2 text-dark" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-2 text-dark" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-2 text-dark" href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                <FaWhatsappSquare />
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
