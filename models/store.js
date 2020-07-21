const mongoose = require('mongoose');
const Schema = mongoose.schema;

const storeSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: String
    },
    url: {
        typr: String
    }
    });

    const Store = mongoose.model('Store', storeSchema)
    module.exports = Store;
