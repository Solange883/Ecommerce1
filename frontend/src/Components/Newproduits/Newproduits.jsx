import React, { useState,useEffect } from 'react'
import './Newproduits.css'
import new_produits from '../Assets/new_produits'
import { Item } from '../Item/Item'

export const Newproduits = () => {
  const API_URL = "https://ecommerce1-backend-l29n.onrender.com";
  const [new_produits,setNewProduits]=useState([])

  useEffect(()=>{
    fetch(`${API_URL}/newProduits`)
    .then((response)=>response.json())
    .then((data)=>setNewProduits(data))
  },[])

  return (
    <div className='newproduits'>
        <h1>NOUVEAUX PRODUITS</h1>
        <hr />
        <div className='produits'>
        {new_produits.map((item,i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
        })}

        </div>
    </div>
  )
}
