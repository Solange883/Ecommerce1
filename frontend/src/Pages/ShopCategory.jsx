import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item'

export const ShopCategory = (props) => {
  const {tous_les_produits} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="texte"> <p>{props.texte}</p>
        <img className='shopcategory-banner' src={props.banner} alt="" />
       </div>

      <div className='shopcategory-indextri'>
        <p>
          <span>Affichage de 1 á 12 </span>sur 36 produits
        </p>
        <div className='shopcategory-tri'>
          Trier par <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className='shopcategory-produits'>
        {tous_les_produits.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name}  image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
          }else{
            return null;
          }
        })}
      </div>

      <div className='shopcategory-plus'>
        Explorez plus
      </div>
    </div>
  )
}
