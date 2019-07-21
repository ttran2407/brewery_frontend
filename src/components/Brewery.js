import React from 'react';
import Map from './Map'
import { Modal, Header, Grid, Rating} from 'semantic-ui-react'

const  Brewery = (props) => {
  
        const {modalOpen, handleClose, selectedBrewery} = props

        return (
            <Modal
                centered={false}
                open={modalOpen}
                onClose={handleClose}
            >
                <Modal.Content>
                    <Grid>
                        <Grid.Column width={6}>
                            <Header>{selectedBrewery.name}</Header>
                            <div><Rating icon='star' defaultRating={selectedBrewery.rating} maxRating={6} /></div><br/>
                            <div>{selectedBrewery.street}, {selectedBrewery.city}, {selectedBrewery.postal_code}</div><br/>
                            <div>{selectedBrewery.phone}</div><br/>
                            <a href={selectedBrewery.website_url}>{selectedBrewery.website_url}</a>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Map brewery = {selectedBrewery}/>
                        </Grid.Column>
                    </Grid>

                </Modal.Content>
            </Modal>
          );
}
 
export default Brewery;