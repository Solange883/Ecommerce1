import React from 'react'
import './Admin.css'
import  Barrelaterale  from '../../Components/Barrelaterale/Barrelaterale'
import {Routes,Route} from 'react-router-dom'
import ListeProduits from '../../Components/ListeProduits/ListeProduits'
import AddProduct from '../../Components/AddProduct/AddProduct'
import Commandes from '../../Components/Commandes/Commandes'

const Admin = () => {
  return (
    <div className='admin'>
      <Barrelaterale/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListeProduits/>}></Route>
        <Route path='/commandes' element={<Commandes/>}></Route>
      </Routes>
    </div>  
  )
}

export default Admin
