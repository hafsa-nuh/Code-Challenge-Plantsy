import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plant, search }) {
  //  to be able to search 
  const filterPlant = plant.filter((eachPlant) =>
    eachPlant.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterPlant)

  return (
    <>
      <ul className="cards">
        {filterPlant.map((perPlant) => {
          return (
          <PlantCard key={perPlant.id} {...perPlant} />)
        }
        )}
      </ul>
    </>
  );
}

export default PlantList;
