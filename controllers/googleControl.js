const db = require("../models");
const axios = require("axios");

const controls = {
    findAll: (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes", req.query)
            .then(results => {
                results.data.items.filter(
                    result => 
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            })
            .then(apiBooks => {
                db.Book.find().then(dbBooks => 
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id
                        )
                    )
                )
            })
            .then(books => res.json(books))
    }
}

module.exports = controls;