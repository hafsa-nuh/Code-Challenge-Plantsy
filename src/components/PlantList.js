import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plant}) {

  return <>
    <ul className="cards">
      {plant.map((perPlant)=> (
        <PlantCard  plant={perPlant}/>
      ))}
    </ul>
  </>
}

export default PlantList;
