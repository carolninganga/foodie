const axios = require('axios');
const db = require('../models');

//method for yelpController 
//findAll searches the yelp API returns only the entries we havent 
//make sure that the store is returned form the API

module.exports = {
    findAll: function(req, res) {
        const { query: params } = req;
        console.log(params)
        axios({
            'method': 'GET',
             'url': `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`,

            'headers': {
                'Content-Type': 'application/json',
                 'Authorization': `Bearer ${process.env.REACT_APP_YELP_API_KEY}` 
            }
        }).then(results => 
            results.data.businesses.filter(
                result => 
                result.name &&
                result.display_phone &&
                result.location.address1 &&
                result.location.city &&
                result.location.state &&
                result.location.zip_code &&
                result.image_url &&
                result.rating &&
                result.url
            )
        )
        .then(apiStores => 
            db.Store.find().then(dbStores => 
                apiStores.filter(apiStore => 
                    dbStores.every(dbStore => dbStore.yelpId.toString() !== apiStore.id))))
                    .then(stores => res.json(stores))
                    .catch(err => res.status(422).json(err));
    }
};
