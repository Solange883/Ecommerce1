import React, { useContext} from 'react'
import './Panieritems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


export const Panieritems = () => {
  const API_URL = "https://ecommerce1-backend-l29n.onrender.com";
  const {tous_les_produits,panierItems,removeFromPanier,getTotalMontantPanier}=useContext(ShopContext);

  const enregistrerCommande = async () => {
    const products = Object.keys(panierItems)
      .map(id => {
        const produit = tous_les_produits.find(p => p.id === parseInt(id)); // Trouver le produit correspondant
        if (!produit) return null; // Vérifier si le produit existe
  
        return {
          productId: id,       // ID du produit
          quantity: panierItems[id], // Quantité
          name: produit.name, // Nom du produit
        };
      })
      .filter(item => item && item.quantity > 0); // Filtrer les articles valides
  
    const totalPrice = getTotalMontantPanier(); // Calcul du total

    const response = await fetch(`${API_URL}/ajoutercommande`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${localStorage.getItem('auth-token')}`, // Token JWT
      },
      body: JSON.stringify({
        products,
        totalPrice,
      }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert('Votre commande a ete enregistrée et sera traitée dans de plus bref delais!');
    } else {
      alert(`Erreur: ${data.message}`);
    }
  };
  

 


  



  console.log(panierItems)
  return (
    <div className='panieritems'>
      <div className='panieritems-format-main'>
        <p>Produits</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Quantite</p>
        <p>Total</p>
        <p>Supprimer</p>
      </div>
      <hr />
      {tous_les_produits.map((e)=>{
        if(panierItems[e.id]>0) { 
          return  <div>
                     <div className='panieritems-format panieritems-format-main'>
                       <img src={e.image} alt="" className='paniericon-produit' />
                       <p>{e.name}</p>
                       <p>{e.new_price}</p>
                       <button className='panieritems-quantite'>{panierItems[e.id]}</button>
                       <p>{e.new_price*panierItems[e.id]}F</p>
                       <img className="paniericon-remove" src={remove_icon} alt="" onClick={()=>{removeFromPanier(e.id)}}/>
                    </div>
                    <hr />
                  </div>
        }return null;
      })}

      <div className='panieritems-down'>
        <div className="panieritems-total">
          <h1>Total panier</h1>
          <div>
            <div className="panieritems-total-item">
              <p>Sous Total</p>
              <p>{getTotalMontantPanier()}F</p>
            </div>
            <hr />
            
           
            <div className="panieritems-total-item">
              <p>Total</p>
              <p>{getTotalMontantPanier()}F</p>
            </div>
          </div>
          <button onClick={()=>enregistrerCommande()}>Commander</button>
        </div>

        <div className="panieritems-codepromo">
          <p>Si vous avez un code promo,Entrez le</p>
          <div className="panieritems-champpromo">
            <input type="text" placeholder='code promo'/>
            <button>Soumettre</button>
          </div>
        </div>

      </div>
    </div>
  )
}
