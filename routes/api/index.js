const path = require('path');
const router = require('express').Router();
const storeRoutes = require('./store');
const contactUs = require('./contact-us')
// const yelpRoutes = require('./yelp');

// store routes
router.use('/store', storeRoutes);
router.use('/contact-us', contactUs);

// yelp routes
// router.use('/yelp', yelpRoutes);

//for anything else render the html page

router.use(function(req, res) {
    // res.sendfile('./main.html');
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

module.exports = router;