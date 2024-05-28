import React from 'react'
import Taxiservice from './Taxiservice'
import Carrentalservices from './Carrentalservices';
import Feedback from '../feedback/Feedback'
const Taxi = () => {
  return (
    <div>
     <Taxiservice />
     <Carrentalservices />
     <Feedback />
    </div>
  )
}

export default Taxi
