import React from 'react'
import iitrlogo from './images/iitrlogo.jpg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Title() {
  return (
    <div className='header'>
      <div>
        <Link to='/' className='title'>
          <h1 className='head title'>SPACE</h1>
          <h1 className='subhead title'>13th International Conference on Security Privacy and Applied Cryptographic Engineering</h1>
        </Link>
        <Navbar></Navbar>
      </div>
      <img className='logo' src={iitrlogo}></img>
    </div>
  )
}

export default Title
