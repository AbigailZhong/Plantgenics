import { getAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import Plant from './Plant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

type props = {
    plant: Plant
}

function PlantListing({plant}: props) {
    return (
        <div className="card shadow-sm plant-listing">
            <FontAwesomeIcon icon={faSeedling} class="favorite"/>
            <img src={plant.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{plant.name} Seeds</h5>
                <p className="card-text">
                    <div className="bold">Price per ounce: ${plant.price}</div> 
                </p>
                <p className="card-text">
                    <div className="bold">Type: {plant.type}</div>
                </p>
            </div>
        </div>
    )
}

export default PlantListing