import React from 'react'
import { MDBRow } from 'mdbreact'
import icon from '../assets/images/lpIcon.jpg'
import '../assets/styling/App.css'

function header() {
    return (
        <div className='bgBlack'>
        <MDBRow className='justify-content-around'>
          <a href='/home'>
            <img src={icon} className='iconStyle' />
          </a>
          <a
            className='header-css hover tw p br'
            href='/home'
            >
              Home
          </a>
          <a 
            className='header-css hover tw p br'
            href='/login'
            >
              Login
          </a>
          <a 
            className='header-css hover tw p br'
            href='/account'
            >
              Account
          </a>
          <a 
            className='header-css hover tw p br'
            href='/blog'
            >
              Blog
          </a>
          </MDBRow>

        </div>
    )
  }

export default header;