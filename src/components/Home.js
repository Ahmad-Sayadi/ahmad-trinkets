import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home-wrapper ">
      <img
         className="home-image"
        src="https://source.unsplash.com/random"
        alt=""
      />

      <button className="md-button shop-button">Shop</button>
    </div>
  )
}

export default Home
