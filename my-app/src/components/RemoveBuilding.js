import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'



export default class RemoveBuilding extends Component {
    render() {
        return (
            <div>
                <Button variant="primary"><FontAwesomeIcon icon={faWindowClose} size="2x"></FontAwesomeIcon></Button>
            </div>
        )
    }
}