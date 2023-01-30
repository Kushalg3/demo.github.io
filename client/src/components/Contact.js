import React from 'react'
import phonepic from '../images/phone.png'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className='Container'>
        <div className='contact-info'>
          <div className='row justify-content-between'>
            <div className='col-3 box p-3 bg-light '>
              <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              <span>Phone</span>
            </div>
            <div className='col-3 box p-3 bg-light'>
              <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              <span>Phone</span>
            </div>
            <div className='col-3 box p-3 bg-light'>
              <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              <span>Phone</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact