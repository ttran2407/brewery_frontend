import React, { Component } from 'react';
import logo from '../pictures/logo.png'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Menu  attached='top' inverted>
                    <Menu.Item >
                        <img style={{'height': "50px", 'width': "50px"}} src={logo} alt="Logo" />
                    </Menu.Item>

                    <Menu.Item >
                    <h1 style={{'fontSize': '16px', 'fontFamily': "Droid serif",'color': "white", "margin": "auto" }}>Finding the best Brewery in Pensylvania</h1>
                    </Menu.Item>

                    
                    
                    <Menu.Item position='right'>
                    <div className='ui right aligned category search item' onChange={this.props.handleChange}>
                        <div className='ui transparent icon input'>
                            <input className='prompt' type='text' style={{"color": "white"}} placeholder='Search Brewery Name ...' />
                                <i className='search link icon' />
                        </div>
                    </div>
                    </Menu.Item>
                </Menu>
            </div>
        
         );
    }
}
 
export default NavBar;