import React, { MouseEventHandler, ReactElement } from 'react';
import Plant from './Plant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import * as CSS from 'csstype';

type Props = {plants: Plant[], addPlantToWishlist: (plant: Plant) => void; };

function DisplayPlants({plants, addPlantToWishlist}:Props):ReactElement<any, any>{
  
  return (

      <div className="d-flex flex-row" id="plant-listings">
          { plants.map(plant=>
              <div className="card shadow-sm plant-listing">
                <div className="card-img-top plant-img-container">
                  <button type="button" className="favorite-button" onClick={e => addPlantToWishlist(plant)}><FontAwesomeIcon icon={faSeedling} class="favorite animate__animated animate__rubberBand animate__delay-1s" /></button>
                  <img src={plant.image} className="plant-img img-fluid" alt={plant.name}></img>
                </div>

                <div className="card-body">
                    <h5 className="card-title" data-toggle="modal" data-target={`#${plant.name}-modal`}>{plant.name} Seeds</h5>
                    <p className="card-text">
                        <div className="bold">Price per ounce: ${plant.price}</div> 
                    </p>
                    <p className="card-text">
                        <div className="bold">Type: {plant.type}</div>
                    </p>
                </div>

                <div className="modal fade" id={`${plant.name}-modal`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{plant.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>{plant.description}</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
          ) }
      </div>
  )

}

export default DisplayPlants;