import React from 'react';
import swal from 'sweetalert';
import {Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Plant from './Plant';
import DisplayPlants from './displayPlants';
import './Custom.css';
import Navbar from './Navbar';
import Home from './Home';
import Wishlist from './DisplayWishlist';
import Login from './Login';
import Filter from './Filter';

type Props = {}
type State = { 
  plants: Plant[],
  wishlist: Plant[]}

class App extends Component <Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
      plants: [],
      wishlist: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4242/plants")
    .then(res=>res.json())
    .then(plts=>this.setState({plants: plts}));
  }


  addPlantToWishlist = (plt: Plant) => {
    let newWishlist = [...this.state.wishlist, plt];
    this.setState({ wishlist: newWishlist });
    swal({
      title: "Success!",
      text: "Item added to your Wishlist.",
      icon: "success"
      });
  }

  removePlantFromWishlist = (plt: Plant) => {
    let newWishlist = [...this.state.wishlist]

    swal({
      title: "Are you sure?",
      text: "Remove this item from your wishlist?",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {

        newWishlist.splice(newWishlist.findIndex(p => p.name === plt.name),1);
        this.setState({ wishlist: newWishlist });

        swal("Poof! This item has been removed.", {
          icon: "success",
        });
      } else {
        swal("Item removal canceled.");
      }
    });
  }

  //--------with router:
  
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/shop" >
            <div id="shop-container" className="d-flex flex-row">
              <Filter/>
              <Wishlist removePlantFromWishlist={this.removePlantFromWishlist} wishlist={ this.state.wishlist } />
              <div id="plants-container">
                <h2>Shop Seeds</h2>
                <DisplayPlants addPlantToWishlist={this.addPlantToWishlist} plants={ this.state.plants }/>
              </div>
            </div>
          </Route>
          <Route exact path="/login"><Login /></Route>
          {/* <Route path="/create-bio" ><AddDeveloper addDeveloper={ this.addDeveloper } /></Route> */}
        </Switch>
      </Router>

    );
  }
  
}

export default App;