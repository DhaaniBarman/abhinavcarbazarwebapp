import React from 'react'
import Contactus from '../../components/contact/Contactus';
const Contact = () => {
  return (
    <div>
      <Contactus />
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10308.06840087031!2d79.90537778448682!3d23.173192018186587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b11fb96a1e75%3A0x596cd1e72a5bedf0!2sAbhinav%20Car%20Bazar!5e0!3m2!1sen!2sin!4v1716061235479!5m2!1sen!2sin" className='gmap' 
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
