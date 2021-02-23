import React from 'react';

import {Navbar} from 'react-bootstrap'

function Head(){
    return (
        <div style={{height : '10vh'}}>
             {/* navbar */}
            <Navbar bg="white" variant="white">
                <Navbar.Brand style={{fontSize:'35px'}} href="www.spacex.com">SpaceX</Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Head;