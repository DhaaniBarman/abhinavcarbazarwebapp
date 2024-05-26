import React from 'react'
import Slider from '../../components/slider/Slider'
import Services from '../../components/services/Services';
import Cargallery from '../../components/cargallery/Cargallery'
import Banner from '../../components/banner/Banner';
import Feedback from '../../components/feedback/Feedback';
import Carrental from '../../components/services/Carrental';
import Taxiservice from '../../components/services/Taxiservice';
import Bestfe from '../../components/bestfe/Bestfe';
import Touristplaces from '../../components/services/Touristplaces';
import Contactus from '../../components/contact/Contactus';
const Home = () => {
  return (
    <>
      <Slider />
      <Services />
      <Cargallery />
      <Banner />
      <Carrental />
      <Taxiservice />
      <Touristplaces />
      <Bestfe />
      <Contactus />
      <Feedback />
    </>
  )
}

export default Home
