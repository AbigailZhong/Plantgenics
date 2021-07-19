import React, { ReactElement } from 'react';
import Plant from './Plant';
import PlantListing from './PlantListing'



type Props = {plants:Plant[]};

function DisplayPlants({plants}:Props):ReactElement<any, any>{

  return (
      <div>
          { plants.map(plant=><PlantListing Name={plant.name} key={plant.id}/>) }
      </div>
  )

}

export default DisplayPlants;