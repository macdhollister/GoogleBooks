const db = require("../models");

const controls = {

    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(foundBooks => res.json(foundBooks));
    },

    findById: (req, res) => {
        db.Book.findById(req.params.id)
            .then(foundBook => res.json(foundBook));
    },

    newBook: (req, res) => {
        db.Book.create(req.body)
            .then(book => res.json(book));
    },

    deleteBook: (req, res) => {
        db.Book.findById(req.params.id)
            .then(book => book.remove())
            .then(book => res.json(book));
    }
}

module.exports = controls;