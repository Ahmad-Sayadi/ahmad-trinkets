import React from 'react'
import data from '../data'

const Item = (props) => {
  

  const item = data.find(i=> i.id === Number(props.match.params.id))


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
          <div>
            <p className="item-description">{item.description}</p>
          </div>
        </div>
      );
}

export default Item