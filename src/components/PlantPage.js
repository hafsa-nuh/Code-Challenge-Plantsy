import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const url = "http://localhost:6001/plants";
function PlantPage() {
  const [plant, setPlant] = useState([]);
  console.log(plant);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setPlant(data));
  }, []); 
  return (
    <main>
      <NewPlantForm plant={plant} setPlant={setPlant} url={url} />
      <Search />
      <PlantList plant={plant} />
    </main>
  );
}

export default PlantPage;
