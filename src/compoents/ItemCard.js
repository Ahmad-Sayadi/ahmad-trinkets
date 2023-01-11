import React from 'react'

const ItemCard = ({ items }) => {
  return (
    <div>
      <img className="item-list-image" src={items.imageUrl} alt={items.name} />
      <p>Name: {items.name}</p>
      <p>Price: {items.price}</p>
    </div>
  )
}

export default ItemCard
