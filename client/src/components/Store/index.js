import React from 'react'
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Store( { name, phone, street, city, state, zip_code, image, rating, url, Button }) {
    return (
        <ListItem> 
            <h3 className="font-italic">{name}</h3>
             <Col size="12 sm-4 md-2">
                <img className="img-thumbnail img-fluid w-100" src={image} alt={name} />
                </Col>
            <Row className="flex-wrap-reverse">
                <Col size="md-8">
                    {phone && <h5 className="font-italic">{phone}</h5>} 
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

            <Row>
                <Col size="md-6">
                    <p className="font-italic small"><i class="fas fa-map-marker-alt">{street} {city} {state} {zip_code }</i></p>
                </Col>
            </Row>
            <Row>
                <Col size="12 sm-4 md-2">
                    {/* <img className="img-thumbnail img-fluid w-100" src={image} alt={name} /> */}
                    <p className="rating">Rating:{rating}</p>

                </Col>
                {/* <Col size="12 sm-8 md-10">
                <p>Rating:{rating}</p>
                </Col> */}
            </Row>
        </ListItem>
    )
}

export default Store;