import React from 'react'
import { NavLink } from 'react-router-dom'
import signinpic from '../images/signin_image.jpg'

const Login = () => {
  return (
    <div className='signin bg-light'>
      <div className='Container box bg-white px-4 py-4'>
        <div className='signin-content row align-items-center'>
          <div className='signin-image col'>
            <figure>
              <img src={signinpic} alt='registration pic' id='signin-image' />
            </figure>
            <NavLink to='/signup'className= 'signin-image-link link-secondary text-decoration-none'>Create an account</NavLink>
          </div>
          <div className='signin-form col'>
            <h2 className='form-title mb-4'>Sign In</h2>
            <form className='signin-form'>
              <div className='form-group input-group mb-3'>
                <label htmlFor='email' className='input-group-text'><i class="zmdi zmdi-email"></i></label>
                <input type='email' name='email' id='email' autoComplete='off' placeholder='Your email' className='form-control'/>
              </div>
              <div className='form-group input-group mb-4'>
                <label htmlFor='password' className='input-group-text'><i class="zmdi zmdi-key"></i></label>
                <input type='password' name='password' id='password' autoComplete='off' placeholder='Your password' className='form-control'/>
              </div>
              <div className='form-group form-button'>
                <input type='submit' name='signin' id='signin-button' className='form-button btn btn-primary' value='Sign In'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login