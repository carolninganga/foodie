const db = require("../models");

// Defining methods for the storeController
module.exports = {
    findAll: function(req, res) {
        db.Store.find(req.query)
            // .then(dbStore => console.log("findall", dbStore))
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Store.findById(req.params.id)
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        // console.log("po",req)
        // console.log("po1",req.body)

        db.Store.create(req.body)
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Store.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Store.findById(req.params.id)
            .then(dbStore => dbStore.remove())
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err));
    }
}