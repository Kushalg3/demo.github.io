import React from 'react'
import phonepic from '../images/phone.png'
import emailpic  from "../images/email.png"
import locationpic from '../images/location.png'

const Contact = () => {
  return (
    <>
    <div className='contact bg-light'>
      <div className='Container'>
        <div className='contact-info'>
          <div className='row justify-content-between'>
            <div className='col-3 box px-2 py-3 bg-white row align-items-center'>
              <div className='col-sm-3'>
                <img src={phonepic} id='phone-img' className='me-1' alt='phone_image'/>
              </div>
              <div className='col-sm-9'>
                <p className='contact-info-title'>Phone</p>
                <p className='contact-info-text'>+916291294558</p>
              </div>
            </div>
            <div className='col-3 box px-2 py-3 bg-white row align-items-center'>
              <div className='col-sm-3'>
                <img src={emailpic} id='phone-img' className='me-1' alt='phone_image'/>
              </div>
              <div className='col-sm-9'>
                <p className='contact-info-title'>Email</p>
                <p className='contact-info-text'>kushalghoshk@gmail.com</p>
              </div>
            </div>
            <div className='col-3 box px-2 py-3 bg-white row align-items-center'>
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
        <div className='contact-form-container'>
          <div className='contact-form box bg-white'>
            <div className='container px-5 pt-3 pb-5'>
              <div className='contact-form-title mb-4'>
                <h1>Get In Touch</h1>
              </div>
              <div className='contact-details'>
                <form className='contact-details-form'>
                  <input type={'text'} name='name' id='name' placeholder='Your Name' autoComplete='off' required='true' />
                  <input type={'email'} name='email' id='email' placeholder='Your email' autoComplete='off' required='true' />
                  <input type={'tel'} name='phone' id='phone' placeholder='Your phone no.' autoComplete='off' required='true' />
                </form>
              </div>
              <div className='message-field'>
                <textarea id='message' placeholder='Write your problem....'></textarea>
              </div>
              <div className='submit'>
                <button type='submit' className='btn btn-primary'>Send Message</button>
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