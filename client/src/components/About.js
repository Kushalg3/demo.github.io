import React from 'react'
import profilepic from '../images/profile-icon.svg';

const About = () => {
  return (
    <>
        <div className='about'>
          <div className='Container box bg-light'>
            <div className='grid-container'>
              <div className='grid-item'>
                <figure>
                  <img src={profilepic} alt='profile' />
                </figure>
              </div>
              <div className='grid-item'>
                <h5>Kushal Ghosh</h5>
                <h6>Software Engineer</h6>
                <p>Profile Ranking: <span>7/10</span> </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle='tab' href="#home">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle='tab' href="#profile">Timeline</a>
                  </li>
                </ul>
              </div>
              <div className='grid-item'>
                <input type={'button'} value='Edit Profile' className='profile-edit-btn' name='btn' />
              </div>
              <div className='grid-item'>
                <div className='profile-work'>
                  <p>WORK LINK</p>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>YouTube</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>LinkedIn</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Gmail</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Github</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Upwork</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Twitter</a><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About