import React from 'react'
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Store( { name, phone, street, city, state, zip_code, image, rating, url, lat, lon, Button }) {
    return (
        <ListItem> 
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                <h3 className="font-italic">{name}</h3>
                </Col>
                <Col size="md-4">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
                            View
                        </a>
                        <Button />
                    </div>
                </Col> 
            </Row>
            <Col size="12 sm-4 md-2">
                <img className="img-thumbnail img-fluid w-100" src={image} alt={name} />
            </Col>
            <Row>
                <Col size="md-6">
                {phone && <p className="font-italic">{phone}</p>} 
                    <p className="font-italic small">{street}</p>
                    <p className="font-italic small">{lat}</p>
                    <p className="font-italic small">{lon}</p>
                    <p className="font-italic small"><i class="fas fa-map-marker-alt"> {city} {state} {zip_code }</i></p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    <p className="rating">Rating:{rating}</p>
                </Col>
            </Row>
        </ListItem>
    )
}

export default Store;