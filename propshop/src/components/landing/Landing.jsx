import React from 'react'
import Model from '../assets/model.png'
import './Landing.css'
import { Link } from 'react-router-dom';



export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <h1 className="banner">50% OFF</h1>
        <div className="left">
        <h1>New collection out NOW!</h1>
        <Link to="" >
          <button>View<i class="fa fa-arrow-circle-right"></i></button>
        </Link>
        </div>
        <img src={Model} alt="model" />
      </div>
    </>
  )
}
