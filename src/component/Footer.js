import React from 'react'
import './Footer.css'
import { Facebook } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-light text-center py-4 ">
        <div className="container footer-section">
          <img className='footer-logo' src={("./..//images/coglytix-logo-white.svg")} alt="Coglytix Logo" height="50" />
          <p>123 AI Street, London, UK | Email: hello@coglytix.io | Phone: +44 7432 865750</p>
          <div className="social-icons">
            <a href="&#xF344" className="text-light mx-2">Facebook</a>
            <a href="#" className="text-light mx-2">Twitter</a>
            <a href="#" className="text-light mx-2">LinkedIn</a>
          </div>
        </div>
        <div className='footer-text'>
          &copy; Copyright 2025 • <a href="#">License</a> • Powered by <a href="#">Coglytix</a>
        </div>
      </footer>
    </div>
    
  )
}

export default Footer