const express = require('express');
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.use(routes);
//app.use('/api/contact-us', require('./routes/api/contact-us'));


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/foodie",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    console.log("mongoDB is connected")
)

app.listen(PORT, () => console.log(`API Server is listening on PORT ${PORT}`));