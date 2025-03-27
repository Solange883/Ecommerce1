import React from 'react'
import './ProduitsSimilaires.css'
import data_product from '../Assets/data' 
import { Item } from '../Item/Item'

export const ProduitsSimilaires = () => {
  return (
   <div className='produitssimilaires'>
        <h1>Produits Similaires</h1>
        <hr />
        <div className='produitssimilaires-item'>
        {data_product.map((item,i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
        })}

        </div>
 
    </div>
  )
}
