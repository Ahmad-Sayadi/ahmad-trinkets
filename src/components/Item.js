import React from 'react'
import {  Routes ,Route, NavLink, useParams} from 'react-router-dom'

import ItemDescription from './ItemDescription'
import ItemShipping from './ItemShipping'



const Item = (props) => {
  const { id } = useParams();
 
 



  const items = props.item.find((product) => {
    return `${product.id}` === id
  })

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={items.imageUrl} alt={items.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{items.name}</h2>
          <h4>${items.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
      
      </nav>
   
     
      
    </div>
  )
}

export default Item
