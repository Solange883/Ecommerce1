import React from 'react'
import './Barrelaterale.css'
import {Link} from 'react-router-dom'
import produit_panier from '../../assets/produit_panier.svg'
import produit_list_icon from '../../assets/produit_list_icon.svg'

const Barrelaterale = () => {
    return (
        <div className='barrelaterale'>
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
               <div className='barrelaterale-item'>
                  <img src={produit_panier} alt="" />
                  <p>Ajouter un produit</p>
                </div>
            </Link>

            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
               <div className='barrelaterale-item'>
                  <img src={produit_list_icon} alt="" />
                  <p>Liste des produits</p>
                </div>
            </Link>

            <Link to={'/commandes'} style={{textDecoration:"none"}}>
               <div className='barrelaterale-item'>
                  <img src={produit_list_icon} alt="" />
                  <p>Liste des commandes</p>
                </div>
            </Link>
        </div>
      )
}

export default Barrelaterale