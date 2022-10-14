import React, { useState } from "react";

function NewPlantForm({plant, setPlant, url}) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price:''
  });

  const handleChange=(e)=>{
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    })
  }

  // post method
  const handleSubmit= (e)=>{
    e.preventDefault()
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then(r => r.json())
    .then(data =>{
      const newDate = [...plant, data]
      setPlant(newDate)
    })
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onChange={handleChange} onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
