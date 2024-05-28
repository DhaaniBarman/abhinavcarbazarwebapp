import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assests/images/slide1.png'
import slide2 from '../../assests/images/slide2.png'
import slide3 from '../../assests/images/slide3.png'
const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100 slides img-fluid" src={slide1} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 slides img-fluid" src={slide2} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 slides img-fluid" src={slide3} alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  )
}
export default Slider;
