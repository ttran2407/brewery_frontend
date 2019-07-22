import React,{Component} from 'react';
import './App.css';
import './Custom.sass'
import BreweryContainer from './containers/BreweryContainer'

import NavBar from './components/NavBar'
import Intro from './components/Intro'


class App extends Component {

  state = {
    breweryList:[],
    breweryListDisplay: []
  }

  componentDidMount = () => {
    // fetch(`https://api.openbrewerydb.org/breweries?by_state=pennsylvania&per_page=50`)
    // fetch("http://localhost:3000/breweries")
    fetch("https://brewery-pens-backend.herokuapp.com/breweries")
    .then(res => res.json())
    .then(breweryList => this.setState({
        breweryList: breweryList,
        breweryListDisplay: breweryList
    }))
  };

  handleChange = (e) => {
    let value = e.target.value.toLowerCase()
    let newList = this.state.breweryList.filter(
      brewery => brewery.name.toLowerCase().includes(value)
    )

    this.setState({breweryListDisplay: newList})
    console.log(newList)
  }

  render() { 
    return (
      <div className="" style={{"backgroundColor": "black"}}>
        <NavBar handleChange ={this.handleChange}/>
        <Intro/>
        <BreweryContainer breweryListDisplay={this.state.breweryListDisplay} />
      </div>
    );
  }
  
}

export default App;
