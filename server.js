const express = require("express");
const mongoose = require('mongoose')

const bookRoutes = require("./routes/book.routes");

mongoose.connect('mongodb://localhost:27017/bookDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express();
app.use(express.json());


app.use('/books', bookRoutes)


app.listen(3001, () => {
    console.log("Server gestartet auf Port 3001");
});

// This is for codeBuddy
module.exports = app;
