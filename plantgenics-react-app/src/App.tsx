import React from 'react';
import './App.css';

import {Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Plant from './Plant';
import PlantListing from './PlantListing';
import DisplayPlants from './displayPlants';
import './Custom.css';
import Navbar from './Navbar';
import Home from './Home';
import Wishlist from './DisplayWishlist';

type Props = {}
type State = { 
  plants: Plant[]}

class App extends Component <Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
        plants: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4242/plants")
    .then(res=>res.json())
    .then(plts=>this.setState({plants: plts}));
  }


  // addPlant = (plt: Plant) => {
  //   plt.id = this.state.plants.length +1;
  //   let newPlants = [...this.state.plants, plt];
  //   this.setState({ plants: newPlants });
  // }

  // ---------------No router code:

  // render() {
  //   return (
  //   <div>
  //     <Navbar />

  //     <div className="container d-flex flex-row">
  //       <div className="filter-container">filter placeholder</div>
  //       <div className="listing-container">
  //         <DisplayPlants plants={ this.state.plants }/>
  //       </div>
  //     </div>
  //   </div>
  //   );
  // }

  //--------with router:
  
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/shop" >
            <div className="shop-container">
              {/* <Wishlist /> */}
              <div className="plants-container">
                <h2>Shop Seeds</h2>
                <DisplayPlants plants={ this.state.plants }/>
              </div>
            </div>
          </Route>
          {/* <Route path="/create-bio" ><AddDeveloper addDeveloper={ this.addDeveloper } /></Route> */}
        </Switch>
      </Router>

    );
  }
  
}

export default App;