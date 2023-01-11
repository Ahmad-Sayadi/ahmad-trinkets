import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import ItemCard from './ItemCard'

const ItemsList = (props) => {
  console.log(props)
    
  return (
    <div className="items-list-wrapper">
    
  {data.map((items)=>{
    return(
        <div className="item-card" key={items.id}>
             <Link to={`/item/${items.id}`}>
            <ItemCard items={items}/>
            </Link>
        </div>
    )
  })}
    </div>
  )
}

export default ItemsList
