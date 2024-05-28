import React from 'react'
import { Link } from 'react-router-dom';
import Alto1 from '../../assests/images/alto1.png'
import HyundaiSantro from '../../assests/images/HyundaiSantro.png'
import ToyotaInnovaCrysta  from '../../assests/images/ToyotaInnovaCrysta3.png'
import spresso from '../../assests/images/S-Presso.png'
import wagonr from '../../assests/images/wagonr.png'
import Suzuki from '../../assests/images/Suzuki.jpg'
const Cargallery = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <h3 class=" text-uppercase text-center pb-5">find Your Car</h3>
                <div class="row ">
                <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={Alto1} alt="Marut Suzuki Alto" />
                            <h4 class="text-uppercase mb-4">Marut Suzuki Alto</h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item  mb-4">
                            <img class="img-fluid mb-4" src={HyundaiSantro} alt="Hyundai Santro"  />
                            <h4 class="text-uppercase mb-4">Hyundai Santro</h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={ToyotaInnovaCrysta } alt="Toyota Innova Crysta" />
                            <h4 class="text-uppercase mb-4">Toyota Innova Crysta </h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={spresso} alt="Maruti Suzuki S-Presso" />
                            <h4 class="text-uppercase mb-4">Maruti Suzuki S-Presso</h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={wagonr} alt="maruti suzuki wagon r" />
                            <h4 class="text-uppercase mb-4">maruti suzuki wagon r</h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-2">
                        <div class="rent-item mb-4">
                            <img class="img-fluid mb-4" src={Suzuki} alt="Suzuki Swift" />
                            <h4 class="text-uppercase mb-4">Suzuki Swift</h4>
                           <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
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
