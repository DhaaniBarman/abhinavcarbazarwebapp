import React from 'react'
import Aboutus from '../../components/aboutus/Aboutus'
import Carrental from '../../components/services/Carrental'
import Taxiservice from '../../components/services/Taxiservice'
import Carbazar from '../../components/services/Carbazar'
import Services from '../../components/services/Services';
import Banner from '../../components/banner/Banner';
import Bestfe from '../../components/bestfe/Bestfe';
import Feedback from '../../components/feedback/Feedback';
import Whychoose from '../../components/aboutus/Whychoose'
const About = () => {
  return (
    <div>
      <Aboutus />
      <Whychoose />
      <Services />
      <Banner />
      <Bestfe />
      <Feedback />
    </div >
  )
}
export default About
