import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signuppic from '../images/signup_image.jpg'

const Signup = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  })

  let name, value;

  const navigate = useNavigate();

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser ({...user, [name]:value})
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name, email, phone, work, password, cpassword} = user;

    const res = await fetch('/register', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name, email, phone, work, password, cpassword})
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      window.alert('Registration Successful.');
      console.log('Registration Successful');

      navigate('/login');
    }
  }

  return (
    <div className='signup bg-light'>
      <div className='Container box bg-white px-5 py-5'>
        <div className='signup-content row align-items-center'>
          <div className='signup-form col'>
            <h2 className='form-title mb-3'>Sign Up</h2>
            <form className='registration-form' method='POST'>
              <div className='form-group input-group mb-3'>
                <label htmlFor='name' className='input-group-text'><i class="zmdi zmdi-account"></i></label>
                <input type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your name' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='email' className='input-group-text'><i class="zmdi zmdi-email"></i></label>
                <input type='email' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your email' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='phone' className='input-group-text'><i class="zmdi zmdi-phone"></i></label>
                <input type='tel' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Your phone' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='work' className='input-group-text'><i class="zmdi zmdi-slideshow"></i></label>
                <input type='text' name='work' id='work' autoComplete='off' value={user.work} onChange={handleInputs} placeholder='Your profession' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='password' className='input-group-text'><i class="zmdi zmdi-key"></i></label>
                <input type='password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Your password' className='form-control'/>
              </div>
              <div className='form-group input-group mb-3'>
                <label htmlFor='cpassword' className='input-group-text'><i class="zmdi zmdi-key"></i></label>
                <input type='password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm password' className='form-control'/>
              </div>
              <div className='form-group form-button'>
                <input type='submit' name='signup' id='signup-button' className='form-button btn btn-warning mt-2' value='Sign Up' onClick={postData}/>
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