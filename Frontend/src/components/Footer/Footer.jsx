import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>  
        <div className="footer-content">  
            <div className="footer-content-left">  
                <img src={assets.logo} alt="RapidFood Logo" />  
                <p style={{fontWeight:600, marginBottom:'8px'}}>Fast. Fresh. Delivered.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis quia quam laborum fuga error ipsa eveniet ipsum dolore ratione hic accusantium obcaecati quaerat culpa totam quibusdam, aliquid voluptatem cupiditate.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook Icon" />
                    <img src={assets.twitter_icon} alt="Twitter Icon" />
                    <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
                </div> 
            </div>   
            <div className="footer-content-center">  
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="#delivery" style={{color:'inherit', textDecoration:'none'}}>Delivery</a></li>
                    <li><a href="#home" style={{color:'inherit', textDecoration:'none'}}>Home</a></li>
                    <li><a href="#about" style={{color:'inherit', textDecoration:'none'}}>About us</a></li>
                    <li><a href="#privacy" style={{color:'inherit', textDecoration:'none'}}>Privacy Policy</a></li>
                </ul>
            </div>  
            <div className="footer-content-right">  
            <h2> GET IN TOUCH</h2>
            <ul>
                <li><a href="tel:+9112345678" style={{color:'inherit', textDecoration:'none'}}>+91-1234-5678</a></li>
                <li><a href="mailto:contact@rapidfood.com" style={{color:'inherit', textDecoration:'none'}}>contact@rapidfood.com</a></li>
            </ul>
            </div>  
        </div>  
        <hr/>
    <p className="footer-copyright">Copyright 2024 © RapidFood.com - All Rights Reserved.</p>
    </div>  
   
  )
}

export default Footer