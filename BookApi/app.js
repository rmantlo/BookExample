// **************************
// DB CHALLENGE: BOOKAPI
// **************************

// Create a DB called bookApi
// In that DB, create a table called books

// Format the books table to have the following columns:
//   nameOfBook - string
//   author - string
//   genre - string
//   pubYear - integer
//   rating - integer

// Create full CRUD for this table and test it on Postman to see if it persists in PGAdmin


// Extra Challenge:

// Instead of a string for genre, create an enum that takes in only the genres you want (i.e. fiction, mystery, scifi, memoir, etc.)

// And, for rating, build a range that allows only a minimum of 1 and a maximum of 5, as well as set a default value of 1 to allow a value to automatically fill in.

// DISCLAIMER:

// If you do not build the backend for this app, you will not be able to participate in the second walk through of this app.

require('./node_modules/dotenv/lib/main').config();

let express = require('express');
let app = express();
let books = require('./controllers/bookcontroller')

let sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
app.use(require('./middleware/headers'))

app.use('/books', books);

app.listen(process.env.PORT, function(){
    console.log(`listening on ${process.env.PORT}`)
});