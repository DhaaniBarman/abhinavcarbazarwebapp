import React from 'react';
import { Link } from 'react-router-dom';
import bhedaghat from '../../assests/images/Bhedaghat-waterfalls.jpg';
import madanmahal from '../../assests/images/madan-mahal.jpg';
import bargi from '../../assests/images/bargi-dam.jpg';
const Touristplaces = () => {
    return (
        <>
             <div className="container-fluid my-md-5 my-sm-3 ">
                <h3 class=" text-uppercase text-center pb-5 pt-sm-5 tplace ">Tourist Place in Jabalpur</h3>
                    <div className="card-deck pt-lg-5">
                        <div className="card">
                            <img className="card-img-top" src={bhedaghat} alt="Bhedaghat Waterfalls" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Bhedaghat Waterfalls</h5>
                                <p className="card-text">Nestled by the Narmada River in Jabalpur, Bhedaghat is famous for its stunning marble cliffs and calm waters. People love it for its beautiful views and unique rocks that tell stories of the past. Visitors often take boat rides to see the scenery up close and capture memorable moments with their cameras.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={madanmahal} alt="Madan Mahal" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Madan Mahal</h5>
                                <p className="card-text">High on a hill in Jabalpur, the Madan Mahal Fort stands proudly, showing off the area's history and stunning architecture. It was built by the Gondwana rulers long ago. From up here, you can see the whole city and the beautiful land around it. People who love history and taking pictures really like this place.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={bargi} alt="Bargi Dam" style={{ height: "300px" }} />
                            <div className="card-body">
                                <h5 className="card-title">Bargi Dam</h5>
                                <p className="card-text">
                                    Located near Jabalpur along the Narmada River, Bargi is loved for its peaceful waters and stunning views. People enjoy its calm atmosphere and beautiful surroundings. Many visitors come here for boat rides and to capture the scenic beauty with their cameras, making it a popular spot for nature enthusiasts and photographers.</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-5  mt-lg-5'>
                      <Link to="/allplace" className="btn pl-4 pr-4 cbtn text-center">
                            View More
                      </Link>
                    </div>
                </div>
        </>
    );
};

export default Touristplaces;
