import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl';

class AddBuilding extends React.Component {
    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="Code" id="code"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="Name" id="name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="Latitude" id="latitude"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="Longitude" id="longitude"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="Address" id="address"></Form.Control>
                </Form.Group>                
			</Form>
        )
    }
}          
export default AddBuilding;