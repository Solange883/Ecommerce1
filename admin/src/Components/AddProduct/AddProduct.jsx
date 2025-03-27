import React, { useState } from 'react'
import './AddProduct.css'
import telecharger_icon from '../../assets/telecharger_icon.svg'

const AddProduct = () => {
  const API_URL = "http://localhost:4000";

  const [image,setImage] = useState(false);
  const imageHandler = (e) =>{
    setImage(e.target.files[0]);
  }

  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"Femme",
    new_price:"",
    old_price:""
  })
  const changeHandler = (e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Ajouterproduit = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData()
    formData.append('product',image);

    await fetch(`${API_URL}/upload`,{
      method:'POST',
      headers:{
        Accept:'application/json',
        
      },
      body:formData,
    }).then((resp) => resp.json()).then((data)=>{responseData=data});
    console.log(responseData);
    
    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);

      await fetch(`${API_URL}/addproduct`,{
        method:'POST',
        headers:{
          Accept:'application/json',  //Le client attend une réponse JSON.
          'Content-Type' : 'application/json', //Le client envoie des données JSON.
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{data.success?alert("Produit ajouté"):alert("Echec")})
    }

  }


  return (
    <div className='addproduct'>
      <div className="addproduct-champ">
        <p>Titre du produit</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Tapez ici' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-champ">
          <p>Prix du produit</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Tapez ici'  />
        </div>
        <div className="addproduct-champ">
          <p>Prix de l'offre</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Tapez ici'  />
        </div>
      </div>
      <div className="addproduct-champ">
        <p>Categorie</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selecteur'>
          <option value="Femme">Femme</option>
          <option value="Homme">Homme</option>
          <option value="Enfant">Enfant</option>
        </select>
      </div>
      <div className="addproduct-champ">
        <label htmlFor="fichier-input">
          <img src={image?URL.createObjectURL(image):telecharger_icon} alt="" className='addproduct-img' /> 
        </label>
        <input type="file" onChange={imageHandler} name='image' id='fichier-input' hidden  />
      </div>
      <button onClick={()=>{Ajouterproduit()}} className='addproduct-btn'>Ajouter</button>

    </div>
  )
}

export default AddProduct