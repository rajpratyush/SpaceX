import React from 'react';

import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

function CardDisplay({data}){
    var routine = "Launch was scrubbed on first attempt, second launc"
    var details = data.details ? data.details.substr(0,50) : routine;
    details += "...";
    return (
        <Card style={{ width: '18rem',margin : '5px' }}>
            <Card.Img variant="top" height="50%" src={data.links.mission_patch} />
            <Card.Body>
                 <Card.Title>{data.mission_name}</Card.Title>
                 <Card.Text>{details}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Launch Year: {data.launch_year}</ListGroupItem>
                <ListGroupItem>Rocket Name: {data.rocket.rocket_name}</ListGroupItem>
                {/* <ListGroupItem>Rocket Type: {data.rocket.rocket_type} at eros</ListGroupItem> */}
                <ListGroupItem>Launch site: {data.launch_site.site_name}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={data.links.article_link}>Article</Card.Link>
                <Card.Link href={data.links.video_link}>Video</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardDisplay;