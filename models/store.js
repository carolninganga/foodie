const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
    zip_code: {
        type: String
    },
    image: {
        type: String
    },
    rating: {
        type: String
    },
    url: {
        type: String
    },
    lat: {
        type: String
    },
    lon: {
        type: String
    },
    source: {
        type: String
    }
});
const Store = mongoose.model("Store", storeSchema);
module.exports = Store;