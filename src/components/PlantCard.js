import React, { useState } from "react";

function PlantCard({id,name, price, image}) {
  const [inStock, setInStock] = useState(true)
  
  const handleStockToggle=() => {
    setInStock(!inStock);
  }

  return (
    <>
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>Price: {price}</p>
        {inStock ? (
          <button className="primary" onClick={handleStockToggle}>
            In Stock
          </button>
        ) : (
          <button onClick={handleStockToggle}>Out of Stock</button>
        )}
      </li>
    </>
  );
}

export default PlantCard;
