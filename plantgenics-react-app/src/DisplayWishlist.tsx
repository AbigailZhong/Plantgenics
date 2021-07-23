import React, { ReactElement } from 'react';
import Plant from './Plant';
import PlantListing from './PlantListing'
import './Custom.css';
import logo from './plant-logo.png';

function Wishlist() {
    return (
    <div id="wishlist">
        <input type="image" id="wish_button" className="show_wish" name="wish_button" alt="press to show wishlist" src={logo} />

        <div>
        <div className="offcanvas.show offcanvas-end" tabIndex= {-1} id="test" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Wishlist WIP</h5>
                
            </div>
            <div className="offcanvas-body d-flex">
                <div className="wishlist-plant">
                    <img src="https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHCHA112-1_medium.jpg" className="img-fluid wishlist-icon" alt="..."></img>
                    <h5>Chamomile</h5>
                    <button type="button" className="btn text-light" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="pulse" value="Submit">Remove</button>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Wishlist;