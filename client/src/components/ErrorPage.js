import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className='error'>
        <div className='Container'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2>we are Sorry, Page not found!</h2>
            <p className='mb-5'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

            <NavLink to={'/'} className='back-btn' >back to home page</NavLink>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
