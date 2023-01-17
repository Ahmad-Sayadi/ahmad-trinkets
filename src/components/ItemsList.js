import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

import ItemCard from './ItemCard'

const ItemsList = (props) => {
  console.log('this',props)
  return (
    <div className="items-list-wrapper">
      {props.product.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <Link to={`/item/${item.id}`}>
              <ItemCard item={item} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ItemsList
