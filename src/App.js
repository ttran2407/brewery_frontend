import React,{Component} from 'react';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'



class App extends Component {

  state = {
    breweryList:[],
  }

  componentDidMount = () => {
    // fetch(`https://api.openbrewerydb.org/breweries?by_state=pennsylvania&per_page=50`)
    // fetch("http://localhost:3000/breweries")
    fetch("https://brewery-pens-backend.herokuapp.com/breweries")
    .then(res => res.json())
    .then(breweryList => this.setState({
        breweryList: breweryList
    }))
  };

  render() { 
    return (
      <div className="">
        <BreweryContainer breweryList={this.state.breweryList} />
      </div>
    );
  }
  
}

export default App;
