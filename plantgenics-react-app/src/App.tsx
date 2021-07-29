import React from 'react';
import swal from 'sweetalert';
import {Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './Custom.css';
import Plant from './models/Plant';
import DisplayPlants from './components/displayPlants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Wishlist from './components/DisplayWishlist';
import Login from './components/Login';
import Filter from './components/Filter';

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
        </Switch>
        <Footer />
      </Router>

    );
  }
  
}

export default App;