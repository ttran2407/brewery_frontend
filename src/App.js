import React,{Component} from 'react';
import './App.css';
import BreweryContainer from './containers/BreweryContainer'
import pic from './pictures/alcohol-ale-bar-159291.jpg'
import NavBar from './components/NavBar'



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
      <div className="" style={{"backgroundColor": "black"}}>
        <NavBar/>
        <img style={{"height": "50%", "width": "50%", "display": "block", "margin": "auto"}} src={pic} alt="Logo" />
        <BreweryContainer breweryList={this.state.breweryList} />
      </div>
    );
  }
  
}

export default App;
