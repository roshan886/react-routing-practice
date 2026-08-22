import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex py-2 px-10  justify-between   bg-blue-300 text-white font-medium'>
      <h1>Agecy AI</h1>
      <div className='flex justify-between items-center gap-10 '>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to='/product'>product</Link>


      </div>
    </nav>
  )
}

export default Navbar