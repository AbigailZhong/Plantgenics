import React, { ReactElement, useState, useEffect } from 'react';
import Plant from '../models/Plant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

type Props = {wishlist: Plant[], removePlantFromWishlist: (plant: Plant) => void;};

function Wishlist({wishlist, removePlantFromWishlist}:Props) {
    const [showWishlist, setWishlist] = useState(false);

    return (
    <div id="wishlist-container" className="shadow card d-flex flex-row animate__animated animate__fadeInRight">

        <div className="wishlist-button-holder">
            <button type="button" className="btn" id="wishlist-button" onClick={e=> setWishlist(!showWishlist)} ><FontAwesomeIcon icon={faSeedling}/></button>
            <p className="vertical-text">Wishlist</p>
        </div>

        <article id="wishlist-items-container" className="d-flex flex-row">
            { (showWishlist) 
                ?
                wishlist.map(wishlist=>
                    <div className="wishlist-item card d-flex flex-column">
                        <img className="img-fluid" src={wishlist.image}/>
                        <p>{wishlist.name}</p>
                        <button type="button" className="btn remove" onClick={e => removePlantFromWishlist(wishlist)}>Remove</button>
                    </div> )
                :
                <div></div>
            }
	    </article>
    </div>
    )
}

export default Wishlist;