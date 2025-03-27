import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigateur">
          <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box fade">Avis (122)</div>
        </div>
       <div className="descriptionbox-description">
        <p>Kosmetik propose une large gamme de produits de beauté pour hommes, femmes et enfants. Il offre une expérience d'achat fluide et intuitive, permettant aux clients de découvrir des soins adaptés à tous les types de peau et besoins spécifiques.</p>
        <p>Le site met en avant des marques de qualité, avec des descriptions détaillées, des avis clients et des conseils beauté pour aider les utilisateurs à faire le meilleur choix.</p>
       </div>
       
    </div>
  )
}
