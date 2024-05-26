import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const CarRentalTable = () => {
  return (
    <div className="container-fluid my-md-5 py-5 my-5">
       <h1 className="display-5 text-uppercase text-center pb-5 mb-5">Car Rental Pricing and Details</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="thead bg-warning">
            <tr>
              <th scope="col">Car Model</th>             
              <th scope="col">Rental Price (per kilometer)</th>
              <th scope="col">Seating Capacity</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Availability Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Toyota Corolla</td>
              <td>Rs 20</td>
              <td>5</td>
              <td>Petrol</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Honda Civic</td>
              <td>Rs 20</td>
              <td>5</td>
              <td>Petrol</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Ford Focus</td>
              <td>Rs 20</td>
              <td>5</td>
              <td>Diesel</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarRentalTable;
