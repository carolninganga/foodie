const router = require('express').Router();
const yelpController = require('../../controller/yelpController');

//match with "/api/yelp"

router
    .route('/')
    .get(yelpController.findAll);

module.exports = router; 
