import React, { useContext } from 'react'
import './Memetypeproduit.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


export const Memetypeproduit = (props) => {
  const { product }= props;
  const {addToPanier} = useContext(ShopContext);

  return (
    <div className='memetypeproduit'>
      <div className="memetypeproduit-left">
        <div className="memetypeproduit-listimg">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="memetypeproduit-img">
          <img className='memetypeproduit-main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className="memetypeproduit-right">
        <h1>{product.name}</h1>
        <div className="memetypeproduit-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="memetypeproduit-right-prices">
          <div className='memetypeproduit-right-prices-old'>{product.old_price}F</div>
          <div className='memetypeproduit-right-prices-new'>{product.new_price}F</div>
        </div>
        <div className="memetypeproduit-right-description">
          <p>Un lait ideal pour l'hydratation</p>

        </div>
        <div className="memetypeproduit-right-size">
          <h1>Selectionner un choix</h1>
          <div className="memetypeproduit-right-sizes">
            <div>Petite</div>
            <div>Moyenne</div>
          </div>
        </div>
        <button onClick={()=>{addToPanier(product.id)}}>Ajouter Au Panier</button>
        <p className='memetypeproduit-right-category'><span>Category :</span>Femme, Lait de corps, Parfum</p>
        <p className='memetypeproduit-right-category2'><span>Tags :</span>Modern, Latest</p>
      </div>

    </div>
   
  )
}
