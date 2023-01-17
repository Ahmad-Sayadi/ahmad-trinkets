import React from 'react'
import { Link, Route, useParams } from 'react-router-dom'
import data from '../data'
import Shipping from './Shipping'
import Description from './Description'


const Item = (props) => {
   
  const item = props.product.find((item)=>{ return item.id === Number(props.match.params.id)})
 
  return (
    <div className="item-wrapper">
    <div className="item-header">
      <div className="image-wrapper">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="item-title-wrapper">
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
      </div>
    </div>
    <nav className='item-sub-nav'>
      <Link to={`/item/${item.id}/description`}>Description</Link>
      <Link to={`/item/${item.id}/shipping`}>Shipping</Link>
    </nav>
    
      <Route path='/item/:id/description' render={()=><Description item={item}/>}/>
      <Route path='/item/:id/shipping' render={()=><Shipping item={item}/>}/>
    
  </div>
  )
}

export default Item