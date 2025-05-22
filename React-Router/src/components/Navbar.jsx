import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div>
      <img src="Logo" alt="" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
