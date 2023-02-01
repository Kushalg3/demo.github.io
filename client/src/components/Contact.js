import React from 'react'
import phonepic from '../images/phone.png'
import emailpic  from "../images/email.png"
import locationpic from '../images/location.png'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='Container'>
        <div className='contact-info'>
          <div className='row justify-content-between'>
            <div className='col-3 box px-2 py-3 bg-light row align-items-center'>
              <div className='col-sm-3'>
                <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              </div>
              <div className='col-sm-9'>
                <p className='contact-info-title'>Phone</p>
                <p className='contact-info-text'>+916291294558</p>
              </div>
            </div>
            <div className='col-3 box px-2 py-3 bg-light row align-items-center'>
              <div className='col-sm-3'>
                <img src={emailpic} id='phone-img' className='me-1' alt='phone_image'/>
              </div>
              <div className='col-sm-9'>
                <p className='contact-info-title'>Email</p>
                <p className='contact-info-text'>kushalghoshk@gmail.com</p>
              </div>
            </div>
            <div className='col-3 box px-2 py-3 bg-light row align-items-center'>
              <div className='col-sm-3'>
                <img src={locationpic} id='phone-img' className='me-1' alt='phone_image'/>
              </div>
              <div className='col-sm-9'>
                <p className='contact-info-title'>Address</p>
                <p className='contact-info-text'>Kolkata, West Bengal, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact