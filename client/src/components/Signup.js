import React from 'react'
import { NavLink } from 'react-router-dom'
import signuppic from '../images/signup_image.jpg'

const Signup = () => {
  return (
    <div className='signup d-flex justify-content-center align-content-center flex-wrap bg-white'>
      <div className='container-of-form d-flex bg-light px-5 py-5 bg-body-tertiary rounded shadow'>
        <div className='signup-content row align-items-center'>
          <div className='signup-form col'>
            <h2 className='form-title mb-3'>Sign Up</h2>
            <form className='registration-form'>
              <div className='form-group input-group mb-3'>
                <label htmlFor='name' className='input-group-text'><i class="zmdi zmdi-account"></i></label>
                <input type='text' name='name' id='name' autoComplete='off' placeholder='Your name' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='email' className='input-group-text'><i class="zmdi zmdi-email"></i></label>
                <input type='email' name='email' id='email' autoComplete='off' placeholder='Your email' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='phone' className='input-group-text'><i class="zmdi zmdi-phone"></i></label>
                <input type='tel' name='phone' id='phone' autoComplete='off' placeholder='Your phone' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='work' className='input-group-text'><i class="zmdi zmdi-slideshow"></i></label>
                <input type='text' name='work' id='work' autoComplete='off' placeholder='Your profession' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='password' className='input-group-text'><i class="zmdi zmdi-key"></i></label>
                <input type='password' name='password' id='password' autoComplete='off' placeholder='Your password' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='cpassword' className='input-group-text'><i class="zmdi zmdi-key"></i></label>
                <input type='password' name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm password' className='form-control'/>
              </div>
              <div className='form-group form-button'>
                <input type='submit' name='signup' id='signup-button' className='form-button btn btn-warning mt-2' value='Sign Up'/>
              </div>
            </form>
          </div>
          <div className='signup-image col mt-2'>
            <figure>
              <img src={signuppic} alt='registration pic' id='signup-image' />
            </figure>
            <NavLink to='/login'className= 'signup-image-link link-primary text-decoration-none'>I am already registered</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup