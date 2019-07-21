import React, { Component } from 'react';
import {Table} from 'semantic-ui-react'
import Brewery from '../components/Brewery'

class BreweryContainer extends Component {

    state = {
       modalOpen: false,
       selectedBrewery: {}  
    }

    handleClick = (brewery) => {
        this.setState({
            modalOpen: true,
            selectedBrewery: brewery
        })
    }

    handleClose = () => this.setState({ modalOpen: false })

    render() { 
        const list = this.props.breweryListDisplay.map(brewery => 
            <Table.Row key={brewery.id} onClick={() => this.handleClick(brewery)} >
                <Table.Cell style = {{'fontWeight': "bold"}} width={4}>{brewery.name}</Table.Cell>
                <Table.Cell>{brewery.brewery_type}</Table.Cell>
                <Table.Cell>
                    {brewery.street}, {brewery.city}, {brewery.postal_code}
                </Table.Cell>
                <Table.Cell>
                <a href={brewery.website_url}>{brewery.website_url}</a>
                </Table.Cell>
          </Table.Row>    
        )

        return ( 
            <div style={{"backgroundColor": "black"}}>
                
                <div style={{"height": "60vh", "overflow": "scroll", "width": "100%"}}>
                <Table  inverted striped selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Type</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Website</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body style={{"height": "50vh", "overflow": "scroll", "width": "100%"}}>
                        {list}
                    </Table.Body>
                </Table>
                </div>


                <Brewery modalOpen={this.state.modalOpen} handleClose={this.handleClose} selectedBrewery={this.state.selectedBrewery}/>
            </div>
         );
    }
}
 
export default BreweryContainer;