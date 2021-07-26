import React, { ReactElement } from 'react';
import Plant from './Plant';
import PlantListing from './PlantListing'

type Props = {plants: Plant[]};

function DisplayPlants({plants}:Props):ReactElement<any, any>{
  return (
      <div className="d-flex flex-row" id="plant-listings">
          { plants.map(plant=><PlantListing plant={plant} key={plant.id}/>) }
      </div>
  )

}

export default DisplayPlants;