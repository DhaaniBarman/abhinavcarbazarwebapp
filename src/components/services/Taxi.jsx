import React from 'react'
import Taxiservice from './Taxiservice'
import TaxiRentalTable from './TaxiRentalTable'
import Feedback from '../feedback/Feedback'
const Taxi = () => {
  return (
    <div>
     <Taxiservice />
     <TaxiRentalTable />
     <Feedback />
    </div>
  )
}

export default Taxi
