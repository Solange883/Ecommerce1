import React ,{useContext}from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import  {Chemin} from '../Components/Chemin/Chemin';
import { Memetypeproduit } from '../Components/Memetypeproduit/Memetypeproduit';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { ProduitsSimilaires } from '../Components/ProduitsSimilaires/ProduitsSimilaires';


export const Product = () => {
  const {tous_les_produits} = useContext(ShopContext);
  const {productId} = useParams();
  const product = tous_les_produits.find((e)=> e.id === Number(productId));
  return (
    <div className="produit">
      <Chemin product={product} />
      <Memetypeproduit product={product}/>
      <DescriptionBox />
      <ProduitsSimilaires/>
    </div>
  )
}
