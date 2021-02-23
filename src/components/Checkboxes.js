import React,{useEffect} from 'react';

import {Form,Button} from 'react-bootstrap'

function Checkboxes({data}){
    console.log(data);
    useEffect(() => {
    }, [])
    return (
            <div style = {{height : '15vh',display : 'flex',justifyContent : 'space-around',flexWrap : 'wrap',padding:'10px'}}>
                {/* checkboxes */}
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Launch" name="launching" defaultChecked={data.launching} onChange={(e)=>data.changeLaunching(e)} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                   <Form.Check type="checkbox" label="Successful Landing" name="landing" defaultChecked={data.landing} onChange={(e)=>data.changeLanding(e)}/>
                </Form.Group>
                <Form.Group controlId="formBasicInput">
                    <Form.Control placeholder="LauchYear" value={data.launchyear} onChange={(e) => data.changeLaunchyear(e)}/>
                </Form.Group>
                <Button variant="primary" style={{height : "50%"}} type="submit" onClick={data.submitChange}>
                     Apply
                </Button>
            </div>
    )
}

export default Checkboxes;