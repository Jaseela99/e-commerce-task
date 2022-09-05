
import React from 'react'
import { Link } from 'react-router-dom'
import {CartState } from '../Context'
import "./Styles.css"
const Navbar = () => {
  const {cart}= CartState()
  return (
    <div >
      <span className="header">ShopNow</span>
      <ul className='nav'>
        <Link to ="/"><li className='home'>Home</li></Link>
        <Link to ="/cart"><li className='cart'>Cart ({cart.length})</li></Link>
        
      </ul>
    </div>
  )
}

export default Navbar

