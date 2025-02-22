import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'





function Navbar() {
  return (
    <div>
         {/* Navigation */}
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={("./..//images/coglytix-logo-white.svg")} alt="Coglytix Logo" height="40" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
        <li className="nav-item"><Link className="nav-link" to="*">Our Product</Link></li>
        <li className="nav-item"><Link className="nav-link" to="*">Our Project</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar