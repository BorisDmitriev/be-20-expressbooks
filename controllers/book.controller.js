const {addBook, purgeBooks} = require('../models/book.model')

async function httpAddBook( req, res ){
    const {title, author, genre, year } = req.body
    try {
        await addBook(title, author, genre, year)
        res.status(201).json({ message: "Book added" })
    } catch (error) {
        res.status(500).json( { message: "Adding a new book failed" } )
    }
}

async function httpPurgeBooks( req, res ){
    try {
        await purgeBooks()
        res.status(200).json({ message: "Books deleted" })
    } catch (error) {
        res.status(500).json( { message: "Deleting books failed" } )
    }
}

module.exports = {httpAddBook, httpPurgeBooks}