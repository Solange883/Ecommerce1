import React from 'react'
import './Chemin.css'
import cheminretour from '../Assets/cheminretour.png'

export const Chemin =(props) =>{
     const {product} =props;
    return (
      <div className='chemin'>
       RETOUR <img src={cheminretour} alt="" /> SHOP <img src={cheminretour} alt="" /> {product.category} <img src={cheminretour} alt="" /> {product.name}
      </div>
    )
}