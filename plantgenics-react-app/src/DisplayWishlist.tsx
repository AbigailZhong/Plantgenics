import React, { ReactElement } from 'react';
import Plant from './Plant';
import PlantListing from './PlantListing';
import './Custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
    return (
    <div id="wishlist-container" className="shadow card d-flex- flex-row">
        <div className="wishlist-button-holder">
            <button type="button" className="btn" id="wishlist-button"><FontAwesomeIcon icon={faSeedling}/></button>
            <p className="vertical-text">Wishlist</p>
        </div>

        <article className="wishlist-items-container">
		    <div className="wislist-item d-flex flex-column">
                <img className="img-fluid" src="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/Lobelia-Blue-Compact-2_medium.jpg" alt="lobelium"/>

            </div>
	    </article>
    </div>
    )
}

export default Wishlist;