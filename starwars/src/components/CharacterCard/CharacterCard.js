import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

import styled from 'styled-components'

const Boxes = styled.div`
    width: 50%;
    min-height: 10em;
`

const CharacterCard = props => {
    return (
        <Boxes>
            <div>
                    <h1>Name: {props.data.name}</h1>
                    <p>Gender: {props.data.gender}</p>
                    <p>Birth Year: {props.data.birth_year}</p>
            </div>
        </Boxes>
    )
}

export default CharacterCard