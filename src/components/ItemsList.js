import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



const ItemsList=(props)=>{
  
   
   


return (
  <div className="items-list-wrapper">
   
    {props.item.map(item => (
      <div className="item-card" key={item.id}>
       <Link to={`/item/${item.id}`}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />

          <p>{item.name}</p>
          <p>${item.price}</p>
      </Link>
      </div>
    ))}
  </div>
)
}
export default ItemsList;