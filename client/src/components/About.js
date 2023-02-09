import React from 'react'
import profilepic from '../images/profile-icon.svg';

const About = () => {
  return (
    <>
       <div className='about'>
          <div className='Container box bg-light'>
            <div className='grid-container'>
              <div className='grid-item profile-img'>
                <figure>
                  <img src={profilepic} alt='profile' id='profile-img' />
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
              <div className='grid-item edit-btn'>
                <input type='button' value='Edit Profile' id='profile-edit-btn' name='btn' />
              </div>
              <div className='grid-item profile-work-link'>
                <div className='work-link'>
                  <p>WORK LINK</p>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>YouTube</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>LinkedIn</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Gmail</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Github</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Upwork</a><br/>
                  <a href='https://www.youtube.com/channel/UCL2r5rNEBM4nZYdZ-9hwe9A'>Twitter</a><br/>
                </div>
              </div>
              <div className='grid-item tabs'>
                <div className='tab-content'>

                  {/* Home Tab */}

                  <div id="home" className="container tab-pane fade active show">
                    <div className='grid-container-2'>

                      {/* Home Tab Content */}

                      <div className='grid-item'>  
                        <label>UserId</label>
                      </div>
                      <div className='grid-item'>
                        <p>739739387494</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Name</label>
                      </div>
                      <div className='grid-item'>
                        <p>Kushal Ghosh</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Email</label>
                      </div>
                      <div className='grid-item'>
                        <p>kushalghoshk@gmail.com</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Phone</label>
                      </div>
                      <div className='grid-item'>
                        <p>6291294558</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Profession</label>
                      </div>
                      <div className='grid-item'>
                        <p>Web Developer</p>
                      </div>

                    </div>
                  </div>

                  {/* Profile Tab */}

                  <div id="profile" className="container tab-pane fade">
                    <div className='grid-container-2'>

                      {/* Profile Tab Content */}

                      <div className='grid-item'>  
                        <label>Experience</label>
                      </div>
                      <div className='grid-item'>
                        <p>10+ years</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Hourly Rate</label>
                      </div>
                      <div className='grid-item'>
                        <p>80 $/hour</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Total Projects</label>
                      </div>
                      <div className='grid-item'>
                        <p>240</p>
                      </div>

                      <div className='grid-item'>  
                        <label>English Proficiency</label>
                      </div>
                      <div className='grid-item'>
                        <p>Native</p>
                      </div>

                      <div className='grid-item'>  
                        <label>Availability</label>
                      </div>
                      <div className='grid-item'>
                        <p>40 hrs/week</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About