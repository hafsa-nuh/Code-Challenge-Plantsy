import React, { useState } from "react";

function PlantCard({id,name, price, image}) {
  const [inStock, setInStock] = useState(true)
  
  function handlestocktoggle() {
    setInStock(!inStock);
  }


  return (
    <>
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {inStock ? (
          <button className="primary" onClick={handlestocktoggle}>
            In Stock
          </button>
        ) : (
          <button onClick={handlestocktoggle}>Out of Stock</button>
        )}
      </li>
    </>
  );
}

export default PlantCard;
