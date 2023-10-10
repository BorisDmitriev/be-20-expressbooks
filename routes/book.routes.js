const express = require('express')
const bookRoutes = express.Router()

const {httpAddBook,httpPurgeBooks} = require('../controllers/book.controller')


bookRoutes.post('/add', httpAddBook )
bookRoutes.delete('/purge', httpPurgeBooks )


module.exports = bookRoutes