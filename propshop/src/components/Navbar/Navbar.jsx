import React from 'react'
import useState from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import Button from './button/Button'
import { Link } from 'react-router-dom';


export default function Navbar() {

  

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
        <p>Prop Shop</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link to='/' >
            <Button value="Home"></Button>
          </Link>
        </li>
        <li>
          <Link to='/mens'>
            <Button  value="Mens"></Button>
          </Link>
          </li>
        <li>
          <Link to='/womens'>
            <Button value="Womens"></Button>
          </Link>
        </li>
        <li>
          <Link to='/kids'>
            <Button  value="Kids"></Button>
          </Link>
        </li>
      </ul>
      <div className="cart-container">
      <div className="nav-cart-count">0</div>
        <Link to='/cart'>
          <img className="cart-icon" src={cart} alt="cart" />
        </Link>
      </div>
    </div>
  )
}
