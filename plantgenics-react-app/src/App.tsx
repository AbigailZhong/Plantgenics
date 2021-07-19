import React from 'react';
import logo from './logo.svg';
import './App.css';
import Plant from './Plant';
import PlantListing from './PlantListing';
// import Navbar from './Navbar';
// import Home from './Home';

type Props = {}
type State = { 
  plants: Plant[]}

class App extends Component<Props, State> {
  constructor(props: any){
    super(props);
    this.state = {
        plants: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:4242/plants")
    .then(res=>res.json())
    .then(devs=>this.setState({plants:devs}));
  }


  addDeveloper = (dev: Developer) => {
    dev.id = this.state.developers.length +1;
    let newDevs = [...this.state.developers, dev];
    this.setState({ developers: newDevs });
  }
  
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/bios" ><DisplayBios developers={ this.state.developers }/></Route>
          <Route path="/create-bio" ><AddDeveloper addDeveloper={ this.addDeveloper } /></Route>
        </Switch>
      </Router>

    );
  }
}

export default App;