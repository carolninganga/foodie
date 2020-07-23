import React from 'react';

function Card({ icon, name, children }) {
    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>
                    <strong>
                       {name} 
                    </strong>
                </h3>
            </div>
            <div className="card-body">{children}</div> 
        </div>
    )
}

export default Card;