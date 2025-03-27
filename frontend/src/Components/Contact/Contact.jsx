import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
        <h1>Recevez des offres exclusives sur votre Email</h1>
        <p>Abonnez vous et restez á jour</p>
        <div>
            <input type="email" placeholder='Votre Email' />
            <button>S'abonner</button>
        </div>
    </div>

  )
}
