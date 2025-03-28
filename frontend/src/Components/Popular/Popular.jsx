import React ,{useEffect,useState} from 'react'
import './Popular.css'
import data_product from '../Assets/data' 
import { Item } from '../Item/Item'


export const Popular = () => {
  const API_URL = "https://ecommerce1-backend-wj82.onrender.com";
   const [data_product,setDataProduct]=useState([])
  
    useEffect(()=>{
      fetch(`${API_URL}/popularinwomen`)
      .then((response)=>response.json())
      .then((data)=>setDataProduct(data))
    },[])

  return (
    <div className='popular'>
    <h1>POPULAIRE CHEZ LES FEMMES</h1>
    <hr />
    <div className='popular-item'>
        {data_product.map((item,i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price} />
        })}
    </div>
</div>

  )
}
