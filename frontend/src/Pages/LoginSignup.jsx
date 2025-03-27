import React,{useState} from 'react'
import  './CSS/LoginSignup.css'


export const LoginSignup = () => {
  const API_URL = "https://ecommerce1-backend-wj82.onrender.com";
  const [state,setState] = useState("Inscription");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:"",
    number:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const sinscrire = async () =>{
    console.log("Inscription executée",formData);
    let responseData;
    await fetch(`${API_URL}/signup`,{
      method:'POST',
      headers:{
        Accept:'application/json',  //Le client attend une réponse JSON.
          'Content-Type' : 'application/json', //Le client envoie des données JSON.
      },
      body:JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }

  }

  const seconnecter = async () =>{
    console.log("Connexion executée",formData);
    let responseData;
    await fetch(`${API_URL}/login`,{
      method:'POST',
      headers:{
        Accept:'application/json',  //Le client attend une réponse JSON.
          'Content-Type' : 'application/json', //Le client envoie des données JSON.
      },
      body:JSON.stringify(formData)
    }).then((resp)=>resp.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }else{
      alert(responseData.errors)
    }
  }
   
  return (
    <div class="loginsignup">
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-champ'>
        {state === "Inscription" ? (
    <>
      <input
        name='username'
        value={formData.username}
        onChange={changeHandler}
        type="text"
        placeholder='Votre nom'
      />
      <input
        name='number'
        value={formData.number}
        onChange={changeHandler}
        type="text"
        placeholder='Votre numéro'
      />
    </>
  ) : null}
          <input  name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Votre adresse mail' />
          <input  name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Mot de passe' />
        </div>
        <button onClick={()=>{state==="Inscription"?sinscrire():seconnecter()}}>Continuer</button>
        {state==="Inscription"?
         <p className='loginsignup-login'>Vous avez deja un compte? <span onClick={()=>(setState("Connexion"))}>Connectez-vous</span></p>
         :<p className='loginsignup-login'>Creer un compte? <span onClick={()=>(setState("Inscription"))}>Cliquez ici</span></p>  
        }
        <div className="loginsignup-condition">
          <input type="checkbox" name='' id='' />
          <p>En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité.</p>
        </div>
      </div>
    </div>
  )
}

