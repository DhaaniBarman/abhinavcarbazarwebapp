import React from 'react'
const TaxiRentalTable = () => {
  return (
    <div>
      <div className="container-fluid my-md-5 py-5 my-5">
       <h1 className="display-5 text-uppercase text-center pb-5 mb-5">Taxi Rental Pricing and Details</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="thead bg-warning">
          <tr>
              <th scope="col">Taxi Type</th>
              <th scope="col">Rate (per km)</th>
              <th scope="col">Seating Capacity</th>
              <th scope="col">Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sedan</td>
              <td>Rs 20</td>
              <td>4</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>SUV</td>
              <td>Rs 20</td>
              <td>6</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Hatchback</td>
              <td>Rs 20</td>
              <td>4</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default TaxiRentalTable
