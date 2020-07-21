const path = require('path');
const router = require('express').Router();
const storeRoutes = require('./store');
const yelpRoutes = require('./yelp');

// store routes
router.use('/store', storeRoutes);

// yelp routes
router.use('/yelp', yelpRoutes);

//for anything else render the html page

route.use(function(req, res) {
    res.sendFile(path.join(_dirname, '../../client/build/index.html'))
});

module.exports = router;