import React, { Component } from 'react';
import {Table, Modal, Header, Grid} from 'semantic-ui-react'
import Map from '../components/Map'

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
        const list = this.props.breweryList.map(brewery => 
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

                <Modal
                    centered={false}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                >
                    <Modal.Content>
                        <Grid>
                            <Grid.Column width={6}>
                                <Header>{this.state.selectedBrewery.name}</Header>
                                <p>{this.state.selectedBrewery.street}, {this.state.selectedBrewery.city}, {this.state.selectedBrewery.postal_code}</p>
                                <a href={this.state.selectedBrewery.website_url}>{this.state.selectedBrewery.website_url}</a>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Map brewery = {this.state.selectedBrewery}/>
                            </Grid.Column>
                        </Grid>
   

                    </Modal.Content>
                </Modal>
            </div>
         );
    }
}
 
export default BreweryContainer;