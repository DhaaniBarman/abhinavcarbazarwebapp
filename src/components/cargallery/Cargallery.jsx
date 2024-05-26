import React from 'react'
import { Link } from 'react-router-dom';
import car1 from '../../assests/images/car-rent-1.png'
import car2 from '../../assests/images/car-rent-2.png'
import car3 from '../../assests/images/car-rent-3.png'
import car4 from '../../assests/images/car-rent-4.png'
import car5 from '../../assests/images/car-rent-5.png'
import car6 from '../../assests/images/car-rent-6.png'
const Cargallery = () => {
    return (
        <>
            <div className="container-fluid my-md-5 my-sm-3 ">
                <h1 class="display-5 text-uppercase text-center pb-5 mb-5 fcar">find Your Car</h1>
                <div class="row ">
                    <div className="col-lg-4 col-md-6">
                        <div className="rent-item mb-4">
                            <img className="img-fluid mb-4" src={car1} alt="car1" />
                            <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                            <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item  mb-4">
                            <img class="img-fluid mb-4" src={car2} alt="" />
                            <h4 class="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                           <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={car3} alt="" />
                            <h4 class="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                           <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={car4} alt="" />
                            <h4 class="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                           <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={car5} alt="" />
                            <h4 class="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                           <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={car6} alt="" />
                            <h4 class="text-uppercase mb-4">Mercedes Benz R3</h4>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-2">
                                    <span className="fewinfo">Model: </span>
                                    <span className="fewinfo">2015</span>
                                </div>
                                <div className="px-2 border-left border-right">
                                    <span className="fewinfo">Owner: </span>
                                    <span className="fewinfo">3</span>
                                </div>
                                <div className="px-2">
                                    <span className="fewinfo">Mileage: </span>
                                    <span className="fewinfo">25K</span>
                                </div>
                            </div>
                           <button className="btn btn-warning px-3 text-dark fs-4" > Rs 1,50,000</button>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5 '>
                    <Link to="/allcar" className="btn pl-4 pr-4 cbtn text-center">
                        View More
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cargallery
