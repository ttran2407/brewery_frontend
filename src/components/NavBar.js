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
                    
                    <h1 style={{'fontSize': '16px', 'fontFamily': "Droid serif",'color': "white" }}>Finding the best Brewery in Pensylvania</h1>
                    </Menu.Item>
                    
                    <Menu.Item position='right'>
                    <div className='ui right aligned category search item'>
                        <div className='ui transparent icon input'>
                            <input className='prompt' type='text' placeholder='Search Brewery Name ...' />
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