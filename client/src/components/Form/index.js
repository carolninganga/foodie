import React from 'react'
import './style.css'

function Form({ term, location, handleInputChange, handleFormSubmit }) {
    return (
        <form>
        <div className="form-group">
        <label htmlFor="Query">
            <strong>Store</strong>
        </label>
        <input
            className="form-control"
            id="Name"
            type="text"
            value={term}
            placeholder="Search for stores"
            name="term"
            onChange={handleInputChange}
            required />

        <label htmlFor="Query">
            <strong>Location</strong>
        </label>
        <input
            className="form-control"
            id="Location"
            type="text"
            value={location} 
            placeholder="Search for location"
            name="location"
            onChange={handleInputChange}
            required />
        </div>  

        <div className="pull-right">
            <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg float-right" style={{backgroundColor: "#2196f3", color: "white"}}
            >
            Search
            </button>
        </div>
        </form>
    )
}

export default Form;