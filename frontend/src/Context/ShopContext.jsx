import React, { createContext,useState,useEffect } from 'react'
import tous_les_produits from  '../Components/Assets/tous_les_produits'


export const ShopContext = createContext(null);

const getDefaultPanier =()=>{
  let panier = {};
  for(let index=0;index < 300+1; index++){
      panier[index] = 0;
  }
  return panier;
}


export const ShopContextProvider  = (props) => {
  const API_URL = "https://ecommerce1-backend-l29n.onrender.com";
  const [panierItems,setPanierItems] = useState(getDefaultPanier());
  const [tous_les_produits,setTousLesProduits] = useState([]);
  
  useEffect(()=>{
    fetch(`${API_URL}/allproducts`)
    .then((response)=>response.json())
    .then((data)=>setTousLesProduits(data))


    if(localStorage.getItem('auth-token')){
      fetch(`${API_URL}/getPanier`,{
        method:'POST',
        headers:{
          ACCEPT:'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')} `,
          'Content-Type':'application/json'
        },
        body:"",
      })
      .then((response)=>response.json())
      .then((data)=>setPanierItems(data));
    }
  },[])

  const addToPanier = (itemId) => {
    setPanierItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if(localStorage.getItem('auth-token')){
      fetch(`${API_URL}/ajouteraupanier`,{
        method:'POST',
        headers:{
          ACCEPT:'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')} `,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>setPanierItems(data));
    }
  };

  const removeFromPanier= (itemId)=>{
    setPanierItems((prev)=>({...prev,[itemId]:prev[itemId]-1}) )

    if(localStorage.getItem('auth-token')){
      fetch(`${API_URL}/supprimerdupanier`,{
        method:'POST',
        headers:{
          ACCEPT:'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')} `,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId}),
      })
      .then((response)=>response.json())
      .then((data)=>console.log(data));
    }
  }

  
  /** JE LUTILISAI QUAND JE NAVAIS PAS ENREGISTRE LE PANIER DANS LA BD
  useEffect(() => {
    const panierStocke = JSON.parse(localStorage.getItem('panierItems'));
    if (panierStocke) {
        setPanierItems(panierStocke);
    }
  }, []); /**Récupère les données du panier qui ont été préalablement stockées dans le LocalStorage du navigateur.
  Met à jour l'état panierItems du contexte ShopContext avec ces données récupérées, initialisant ainsi le panier avec les articles sauvegardés. */

   /**Imaginez qu'un utilisateur ajoute des articles à son panier, puis ferme son navigateur.
    Lorsqu'il revient sur votre site, vous voulez que son panier soit restauré.
    C'est là que la récupération des données du LocalStorage entre en jeu. 
  useEffect(() => {
    localStorage.setItem('panierItems', JSON.stringify(panierItems));
  }, [panierItems]);/**  sauvegarde les données du panier dans le LocalStorage à chaque fois que panierItems change.. */

  const getTotalMontantPanier = ()=> {
    let totalMontant = 0;
    for(const item in panierItems){
      if(panierItems[item]>0){
        let itemInfo = tous_les_produits.find((produit)=>produit.id===Number(item));
        totalMontant += itemInfo.new_price * panierItems[item];
      }
     
    }
    return totalMontant;
  };

  const getTotalItemPanier = ()=>{
    let totalItem = 0;
    for(const item in panierItems){
      if(panierItems[item]>0){
        totalItem+= panierItems[item];
      }
    }
    return totalItem;
  }


  const contextValue = {tous_les_produits,panierItems,addToPanier,removeFromPanier,getTotalMontantPanier,getTotalItemPanier};
 

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}




