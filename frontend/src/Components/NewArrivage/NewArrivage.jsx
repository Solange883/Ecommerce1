import React from 'react'
import './NewArrivage.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import newarrivage1 from '../Assets/newarrivage1.png'

export const NewArrivage = () => {
  return (
    <div className='newArrivage'>
      <div className="new-left">
        <h2>NOUVEAUX PRODUITS</h2>
        <div>
          <div className="hand_icon"> 
            <p>nouvelles</p>
            <img src={hand_icon} alt="" />
          </div>
          <div className='info'>
          <h4>gammes</h4>
          <p >pour tout le monde</p></div>
        
        </div>
        <div className="icon2"> 
            <p>Nos Derniers Produits</p>
            <img src={arrow} alt="" /> 
        </div>
      </div>

      <div className="new-right">
        <img src={newarrivage1} alt="" />
      </div>

    </div>
  )
}
