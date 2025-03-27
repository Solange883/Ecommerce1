import React from 'react'
import './Footer.css'
import whatsapp from '../Assets/whatsapp.png'
import logo from '../Assets/logo.png'
import tiktok from '../Assets/tiktok.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="" />
            <p>Kosmetik</p>
        </div>
        <ul className='footer-links'>
            <li>A propos</li>
            <li>Contact</li>
        </ul>
        <div className='social'>
            <div className='social-icon'>
                <img src={whatsapp} alt="" />
            </div>
            <div className='social-icon'>
                <img src={tiktok} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - Tous droits réservés.</p>
        </div>
    </div>
  )
}
