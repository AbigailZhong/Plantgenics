import { getAllByDisplayValue } from '@testing-library/react'
import React from 'react'
import Plant from './Plant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'

type props = {
    plant: Plant
}

function PlantListing({plant}: props) {
    return (
        <div className="card d-inline-block shadow-sm plant-listing">
            <img src={plant.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h3 className="card-title bold">{plant.name} Seeds</h3>
                <p className="card-text">
                    <div className="bold">Price per ounce: ${plant.price}</div> 
                </p>
                <p className="card-text">
                    <div className="bold">Type: {plant.type}</div>
                </p>
                <button type="button" className="btn text-light" data-mdb-toggle="animation" data-mdb-animation-reset="true" data-mdb-animation="pulse" value="Submit"><FontAwesomeIcon icon={faSeedling}/> Add to Wishlist</button>
            </div>
        </div>
    )
}

// export class DisplayPlants extends Component<Props, State> {
//     constructor(props: any){
//         super(props);
//         this.state = {
//             plants: [
//                 new Plant(1, "Zinnia", "FLower", "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/Zinnia-Show-Stopper-Mix-1-mac_medium.jpg", 11.95),
//                 new Plant(2, "Bell Pepper", "vegetable", "ttps://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVPEP153-1_medium.jpg", 34.95)
//             ]
//         }
//     }

//     componentDidMount() {
//         fetch("http://localhost:4242/plants")
//         .then(res=>res.json())
//         .then(plts=>this.setState({plants: plts}));
//     }
// }

export default PlantListing