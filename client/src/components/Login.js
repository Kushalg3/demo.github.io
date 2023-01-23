import React from 'react'
import { NavLink } from 'react-router-dom'
import signinpic from '../images/signin_image.jpg'

const Login = () => {
  return (
    <div className='signin bg-white'>
      <div className='container-of-signin-form bg-light px-4 py-3 bg-body-tertiary rounded shadow'>
        <div className='signin-content row'>
          <div className='signin-image col'>
            <figure>
              <img src={signinpic} alt='registration pic' id='signin-image' />
            </figure>
            <NavLink to='/signup'className= 'signin-image-link link-secondary text-decoration-none'>Create an account</NavLink>
          </div>
          <div className='signin-form col mt-5'>
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