import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import robot from "./../images/Robot2.gif";


function Banner() {
  return (
    <div>
         <header className="hero">
        <div className="container text-light text-center text-lg-start">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-text">
              <h1 className="fw-bold">Pioneering AI & Data Innovations</h1>
              <h2>Transforming industries with intelligence</h2>
              <p>Coglytix is at the forefront of AI, Data, and Robotics, delivering cutting-edge solutions for startups, enterprises, and institutions.</p>
              <Link to="*" className="btn btn-gradient hero-btn">Explore Our Products</Link>
            </div>
            <div className="col-lg-6 text-center">
              <img src= {robot} alt="Tech Illustration" className="img-fluid hero-img" data-aos="flip-left" data-aos-duration="3000"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Banner