import React from "react";
import "../styles.css"
import { Link } from "react-router-dom";


function Home(props) {
  console.log(props);
  
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button className="md-button shop-button" >
        Shop now!
      </button>
    </div>
  );
}

export default Home;