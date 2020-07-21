const db = require('../models');

//defining the methods for the storeController 
module.exports = {
    findAll: function(req, res) {
        db.Store.find(req.query)
        .then(dbStore => res.json(dbStore))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Store.findById(req.params.id)
        .then(dbStore => res.json(dbStore))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Store.create(req.body)
        .then(dbStore => res.json(dbStore))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Store.findByIdAndUpdate({ id: req.params.id }, req.body)
            .then(dbStore => res.json(dbStore))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Store.findById(req.params.id)
        .then(dbStore => dbStore.remove())
        .then(dbStore => res.json(dbStore))
        .catch(err => res.status(422).json(err));
    }
        
    };