import React from 'react'
import { NewArrivage } from '../Components/NewArrivage/NewArrivage'
import {Popular}   from '../Components/Popular/Popular'
import { Offres } from '../Components/Offres/Offres'
import { Newproduits } from '../Components/Newproduits/Newproduits'
import { Contact } from '../Components/Contact/Contact'

export const Shop = () => {
  return (
    <div>
      <NewArrivage/>
      <Popular/>
      <Offres/>
      <Newproduits/>
      <Contact/>
    </div>
  )
}

