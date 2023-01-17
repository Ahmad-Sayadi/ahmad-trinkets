import React from "react";


const ItemCard = ({ item }) => {
  return (
    <div>
      <img className="item-list-image" src={item.imageUrl} alt={item.name} />
      <p>Name: {item.name}</p>
      <p>Price: {item.price}</p>
    </div>
  );
};
export default ItemCard;
