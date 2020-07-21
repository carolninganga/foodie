const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const routes = require('')

const app = express();

//AJAX body parsing requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static 
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/foodie',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    console.log('mongoDB connected')
);

//started the API server
app.listen(PORT, () => 
console.log(`app listening on PORT ${PORT}`)
);
