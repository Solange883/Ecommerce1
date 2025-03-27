import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profil1 from '../../assets/profil1.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='panneau'>
        <img src={logo} alt="" className='logo' />
        <div>
            <p className='nomlogo'>Kosmetik</p>
            <p className='nompanneau'>Panneau d'administration</p>
        </div>
      </div>
      <img src={profil1} alt="" className='profil' />


    </div>
  )
}

export default Navbar