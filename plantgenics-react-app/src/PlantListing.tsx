import React from 'react'
import Plant from './Plant'

type props = {
    plant: Plant
}

function PlantListing({plant}: props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h1 className="card-title bold">{plant.name} {plant.type}'s Bio</h1>
                <p className="card-text">
                    <span className="bold">Favorite Language:</span> {plant.price}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started:</span> {plant.image}
                </p>
            </div>
        </div>
    )
}

export default PlantListing