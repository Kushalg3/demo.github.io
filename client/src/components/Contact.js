import React from 'react'
import phonepic from '../images/phone.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              <span>Phone</span>
            </div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact