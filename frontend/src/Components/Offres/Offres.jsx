import React from 'react'
import './Offres.css'
import lait from '../Assets/lait.png'

export const Offres = () => {
  return (
    <div className="offres">
      <div className="offres-left">
        <h1>Exclusives</h1>
        <h1>Offres Pour Toi</h1>
        <p>UNIQUEMENT NOS PRODUITS BEST SELLERS</p>
        <button>Verifiez Maintenant</button>
      </div>

      <div className="offres-right">
        <img src={lait} alt="" />
      </div>

    </div>
  )
}
