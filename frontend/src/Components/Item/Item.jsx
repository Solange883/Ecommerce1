import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='prices'>
        {props.new_price ? (
        <>
            <div className='price-new'>
                {props.new_price}f
            </div>
            <div className='price-old'>
                {props.old_price}f
            </div>
        </>
        ) : (
        <div className='price-old no-decoration'>
            {props.old_price}f
        </div>
       )}
       </div>
    </div>
  )
}
