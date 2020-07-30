import React from 'react'
import { ListItem } from "../List";
import { Row } from "../Grid";

import "./style.css";

function Store( { name, phone, street, city, state, zip_code, image, rating, url, Button }) { 

    return (
        <ListItem> 
        <Row>
            <h3 style={{margin: "0 auto"}}>{name}</h3>
                <div><img style={{objectFit: "cover", height:"300px"}} className="img-thumbnail img-fluid w-100" src={image} alt={name}/>
               
                <p className="text-left"><i class="fas fa-comments"></i> Rating: {rating}</p>
               
                {phone && <p className="text-left"><i class="fas fa-phone"></i> {phone}</p>}
             
                <p className="small text-left"><i class="fas fa-map-marker-alt"></i> {street}, {city}, {state} {zip_code}</p>
            </div> 
            </Row>
            <Row>
                    <div className="btn-container">
                   
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
                            View
                        </a>
                        <Button />
                       
                    </div>
                
            </Row>
        </ListItem>
    )
}

export default Store;