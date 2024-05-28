import React from 'react';
import {Link} from 'react-router-dom';
import Alto1 from '../../assests/images/alto1.png'
import HyundaiSantro from '../../assests/images/HyundaiSantro.png'
import ToyotaInnovaCrysta  from '../../assests/images/ToyotaInnovaCrysta3.png'
import spresso from '../../assests/images/S-Presso.png'
import wagonr from '../../assests/images/wagonr.png'
import Suzuki from '../../assests/images/Suzuki.jpg'
import alto from '../../assests/images/Alto.jpg'
import MahindraBolero1 from '../../assests/images/c8.png'
import Wagoner from '../../assests/images/Wagoner.jpg'
import ToyotaInnova1 from '../../assests/images/c16.png'
import ToyotaInnovaCrysta1 from '../../assests/images/ToyotaInnovaCrysta1.jpg'
import ToyotaInnovaCrysta2 from '../../assests/images/ToyotaInnovaCrysta2.png'
import ToyotaInnovaCrysta3 from '../../assests/images/ToyotaInnovaCrysta3.png'
import HondaAmaze from '../../assests/images/HondaAmaze.png'
import HondaAmaze1 from '../../assests/images/HondaAmaze.png'
import minibus from '../../assests/images/minibus.jpg'
import c26 from '../../assests/images/c26.jpg'
import MarutiSuzukiDzire1 from '../../assests/images/MarutiSuzukiDzire1.png'
const Allcar = () => {
    return (
        <div>
            <div class="container-fluid ">
                <div class="container-fluid my-5">
                    <h3 class=" text-uppercase text-center pb-5">Our Car Gallery</h3>
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
            
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={alto} alt="alto" />
                                <h4 class="text-uppercase mb-4"> Marut Suzuki Alto</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={MahindraBolero1} alt="Mahindra Bolero" />
                                <h4 class="text-uppercase mb-4">Mahindra Bolero</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={MarutiSuzukiDzire1} alt="Maruti Suzuki Dzire" />
                                <h4 class="text-uppercase mb-4">Maruti Suzuki Dzire</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={Wagoner} alt="Maruti Suzuki Wagon R" />
                                <h4 class="text-uppercase mb-4">Maruti Suzuki Wagon R</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={ToyotaInnova1} alt="Toyota Innova" />
                                <h4 class="text-uppercase mb-4">Toyota Innova</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={ToyotaInnovaCrysta2} alt="Toyota Innova Crysta" />
                                <h4 class="text-uppercase mb-4">Toyota Innova Crysta</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={ToyotaInnovaCrysta1} alt="Toyota Innova Crysta" />
                                <h4 class="text-uppercase mb-4">Toyota Innova Crysta</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={ToyotaInnovaCrysta3} alt="Toyota Innova Crysta" />
                                <h4 class="text-uppercase mb-4">Toyota Innova Crysta</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={HondaAmaze} alt="Honda Amaze" />
                                <h4 class="text-uppercase mb-4">Honda Amaze</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={HondaAmaze1} alt="Honda Amaze" />
                                <h4 class="text-uppercase mb-4">Honda Amaze</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={minibus} alt="Mini Bus" />
                                <h4 class="text-uppercase mb-4">Mini Bus</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-2">
                            <div class="rent-item mb-4">
                                <img class="img-fluid mb-4" src={c26} alt="Traveller" />
                                <h4 class="text-uppercase mb-4">Traveller</h4>
                                 <Link className="btn btn-warning px-3 text-dark fs-4" to='/contact' >More Info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Allcar;
