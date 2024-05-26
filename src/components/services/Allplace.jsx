import React from 'react'
import bhedaghat from '../../assests/images/Bhedaghat-waterfalls.jpg';
import madanmahal from '../../assests/images/madan-mahal.jpg';
import bargi from '../../assests/images/bargi-dam.jpg';
import kachnarcity from '../../assests/images/kachnarcity.jpg';
import pishanhari from '../../assests/images/pishanhari.jpg';
import ranidurgavati from '../../assests/images/ranidurgavatimusiam.jpg';
import KanhaNationalPark from '../../assests/images/KanhaNationalPark.jpg';
import Bandhavgarh from '../../assests/images/BandhavgarhNationalPark.jpg';
import amarkanthak from '../../assests/images/Amarkantak.jpg';
import pachmardhi from '../../assests/images/Pachmarhi.jpg';
import khajraho from '../../assests/images/khajraho.jpg';
import Satpura from '../../assests/images/Satpura.jpg';
const Allplace = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="container-fluid py-5">
                    <h1 className="display-5 text-uppercase text-center py-5">Tourists Places in Jabalpur</h1>
                    <div className="card-deck py-5">
                        <div className="card">
                            <img className="card-img-top placeimg" src={bhedaghat} alt="Bhedaghat Waterfalls" />
                            <div className="card-body">
                                <h5 className="card-title">Bhedaghat Waterfalls</h5>
                                <p className="card-text">Nestled by the Narmada River in Jabalpur, Bhedaghat is famous for its stunning marble cliffs and calm waters. People love it for its beautiful views and unique rocks that tell stories of the past. Visitors often take boat rides to see the scenery up close and capture memorable moments with their cameras.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={madanmahal} alt="Madan Mahal" />
                            <div className="card-body">
                                <h5 className="card-title">Madan Mahal</h5>
                                <p className="card-text">High on a hill in Jabalpur, the Madan Mahal Fort stands proudly, showing off the area's history and stunning architecture. It was built by the Gondwana rulers long ago. From up here, you can see the whole city and the beautiful land around it. People who love history and taking pictures really like this place.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={bargi} alt="Bargi Dam" />
                            <div className="card-body">
                                <h5 className="card-title">Bargi Dam</h5>
                                <p className="card-text">
                                    Located near Jabalpur along the Narmada River, Bargi is loved for its peaceful waters and stunning views. People enjoy its calm atmosphere and beautiful surroundings. Many visitors come here for boat rides and to capture the scenic beauty with their cameras, making it a popular spot for nature enthusiasts and photographers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck py-5">
                        <div className="card">
                            <img className="card-img-top placeimg" src={ranidurgavati} alt="ranidurgavati" />
                            <div className="card-body">
                                <h5 className="card-title">Rani Durgavati Museum</h5>
                                <p className="card-text">Nestled by the Narmada River in Jabalpur, the Rani Durgavati Museum showcases the rich history and culture of the region. Visitors can explore a variety of artifacts, sculptures, and historical relics, providing insights into the heritage of Jabalpur and its surroundings.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={kachnarcity} alt="kachnarcity" />
                            <div className="card-body">
                                <h5 className="card-title">Kachnar City Shiva Temple</h5>
                                <p className="card-text">Located atop a hill in Jabalpur, the Kachnar City Shiva Temple is a revered Hindu shrine dedicated to Lord Shiva. The temple is known for its towering statue of Lord Shiva, which stands as a prominent landmark in the city. Visitors can experience spiritual tranquility and enjoy panoramic views of Jabalpur from the temple premises.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={pishanhari} alt="pishanhari" />
                            <div className="card-body">
                                <h5 className="card-title">Pishanhari Madhiya</h5>
                                <p className="card-text">Pishanhari Madhiya is a serene locality situated near Jabalpur along the banks of the Narmada River. It is known for its tranquil ambiance and picturesque surroundings, making it a popular destination for nature lovers. Visitors can enjoy leisurely boat rides on the river and soak in the natural beauty of the area.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* near jabalpur */}
                <div className="container-fluid">
                    <h1 className="display-5 text-uppercase text-center py-5">Tourist Places Near Jabalpur</h1>
                    <div className="card-deck py-5">
                        <div className="card">
                            <img className="card-img-top placeimg" src={KanhaNationalPark} alt="Kanha National Park" />
                            <div className="card-body">
                                <h5 className="card-title">Kanha National Park</h5>
                                <p className="card-text">Kanha National Park, located near Jabalpur, is renowned for its lush forests and diverse wildlife, including tigers, leopards, and deer. Visitors can enjoy thrilling wildlife safaris and immerse themselves in the natural beauty of this pristine reserve.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={Bandhavgarh} alt="Bandhavgarh National Park" />
                            <div className="card-body">
                                <h5 className="card-title">Bandhavgarh National Park</h5>
                                <p className="card-text">Bandhavgarh National Park, situated near Jabalpur, is famous for its high tiger population density. It offers exciting opportunities for tiger sightings, along with other wildlife such as deer, monkeys, and numerous bird species.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={amarkanthak} alt="Amarkantak" />
                            <div className="card-body">
                                <h5 className="card-title">Amarkantak</h5>
                                <p className="card-text">Amarkantak, located near Jabalpur, is a sacred pilgrimage town known as the origin of the Narmada River. It is surrounded by lush forests, ancient temples, and scenic viewpoints, offering visitors a serene and spiritually enriching experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck py-5">
                        <div className="card">
                            <img className="card-img-top placeimg" src={khajraho} alt="Khajuraho" />
                            <div className="card-body">
                                <h5 className="card-title">Khajuraho</h5>
                                <p className="card-text">Khajuraho, situated near Jabalpur, is renowned for its UNESCO World Heritage Site temples adorned with exquisite sculptures. These temples depict various aspects of life and are celebrated for their architectural beauty and historical significance.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={Satpura} alt="Satpura National Park" />
                            <div className="card-body">
                                <h5 className="card-title">Satpura National Park</h5>
                                <p className="card-text">Satpura National Park, located near Jabalpur, offers a pristine wilderness experience with its rugged terrain, dense forests, and meandering rivers. Visitors can enjoy adventurous activities like trekking, camping, and wildlife safaris amidst breathtaking natural beauty.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top placeimg" src={pachmardhi} alt="pachmardhi" />
                            <div className="card-body">
                                <h5 className="card-title">Pachmarhi</h5>
                                <p className="card-text">Pachmarhi is a picturesque hill station located near Jabalpur, known for its lush greenery, cascading waterfalls, and serene landscapes. Visitors can explore scenic viewpoints, trekking trails, and ancient caves, such as Pandava Caves and Mahadeo Cave. Pachmarhi offers a tranquil retreat amidst nature, making it a popular destination for nature lovers and adventure enthusiasts.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Allplace
