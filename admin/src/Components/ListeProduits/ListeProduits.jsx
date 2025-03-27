import React, { useEffect ,useState} from 'react'
import "./ListeProduits.css"
import cross_icon from '../../assets/cross_icon.png';

const ListeProduits = () => {
  const API_URL = "http://localhost:4000";
  const [tous_les_produits,setTousLesProduits]=useState([])

  const recupererInfo = async ()=>{
    await fetch(`${API_URL}/allproducts`)
    .then((res)=>res.json())
    .then((data)=>{setTousLesProduits(data)});
  }

  const supprimerProduit= async (id)=>{
    await fetch(`${API_URL}/removeproduct`,{
      method:'POST',
      headers:{
        Accept:'application/json',  //Le client attend une réponse JSON.
        'Content-Type' : 'application/json', //Le client envoie des données JSON.
      },
      body:JSON.stringify({id:id})
    })
    await recupererInfo();
  }

  useEffect(()=>{
    recupererInfo();
  },[])

  return (
    <div className='listeproduits'>
      <h1>Liste Des Produits</h1>
      <div className="listeproduits-format-main">
        <p>Produits</p>
        <p className='titre'>Titre</p>
        <p className='prix'>Prix</p>
        <p className='prix2'>Prix Offre</p>
        <p>Categorie</p>
        <p>Supprimer</p>
      </div>
      <div className="listeproduits-touslesproduits">
        <hr />
        {tous_les_produits.map((product,index)=>{
          return <>
          <div key={index} className='listeproduits-format-main listeproduits-format'>
            <img src={product.image} alt="" className="listeproduits-produit-image" />
            <p>{product.name}</p>
            <p>{product.old_price}F</p>
            <p>{product.new_price}F</p>
            <p>{product.category}</p>
            <img onClick={()=>{supprimerProduit(product.id)}} src={cross_icon} className='listeproduits-remove-icon' alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListeProduits