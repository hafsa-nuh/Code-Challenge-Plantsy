import React, {useState, useEffect} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plant, setPlant] = useState([])
  console.log(plant)
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=> setPlant(data))
  },[]) 


  return (
    <ul className="cards">
      {plant.map((perPlant)=> (
        <PlantCard  plant={perPlant}/>
      ))}
    </ul>
  );
}

export default PlantList;
