import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {FaTwitter} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>K-tech</a>
      <ul className='permalinks'>
         <li><a href="#">Home</a></li>
         <li><a href="#about">About</a></li>
         <li><a href="#experiences">Experience</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#testimonials">Testimonials</a></li>
         <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className='footer_socials'>
        <a href="#">
          <FaFacebookF/>
        </a>
        <a href="#">
          <GrInstagram/>
        </a>
        <a href="#">
          <FaTwitter/>
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; K-tech 2022.</small>
      </div>
    </footer>
  )
}

export default Footer
