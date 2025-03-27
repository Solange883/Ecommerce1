import React, { useState,useContext ,useRef} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown  from '../Assets/nav_dropdown.png'

export const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalItemPanier} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>Kosmetik</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color: '#626262'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none', color: '#626262'}}  to='/men'>Hommes</Link> {menu==="mens"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none', color: '#626262'}}  to='/Women'>Femmes</Link> {menu==="womens"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none', color: '#626262'}}  to='/kids'>Enfants</Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className='nav-cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Deconnexion</button>
            :<Link to='/login'><button>Connexion</button></Link>
            }
            <Link to='/panier'><img src={cart_icon} alt="" /> </Link>
            <div className='nav-cart-count'>{getTotalItemPanier()}</div>
        </div>
    </div>
  )
}

