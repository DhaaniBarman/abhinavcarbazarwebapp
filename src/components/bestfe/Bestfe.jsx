import React from 'react';
import { FaHeadset, FaCar, FaMapMarkerAlt } from 'react-icons/fa';
const Bestfe = () => {
  return (
    <>
     <div className="container-fluid my-md-5 my-sm-3  py-sm-3">
          <div className="row ">
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center bg-light p-4 mb-4 bestfeatures" >
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-warning ml-n4 mr-4 bestinner">
                  <FaHeadset className="" size={48} />
                </div>
                <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center  p-4 mb-4 bestfeaturesc" >
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-warning ml-n4 mr-4 bestinner">
                  <FaCar className="" size={48} />
                </div>
                <h4 className="text-light text-uppercase m-0">Car Reservation Anytime</h4>
              </div>
            </div>
            <div className="col-lg-4 mb-2">
              <div className="d-flex align-items-center bg-light p-4 mb-4 bestfeatures" >
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-warning ml-n4 mr-4 bestinner">
                  <FaMapMarkerAlt className="" size={48} />
                </div>
                <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Bestfe;
