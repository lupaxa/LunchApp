// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var config = require('server/config');
// var database = require('server/config/database');

// mongoose.connect(config.get('mongoose:uri'));

// mongoose.connect('mongodb://lupaxa:l285301476@ds131583.mlab.com:31583/dishes', {
//   useMongoClient: true,
//   /* other options */
// });


// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
// app.use('/dishes', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

// var Dish = require('./models/dish');

// app.get('/dishes', function(req, res) {
//     console.log('11')
//     var promise = Dish.find().exec();
//     promise.then(function(dishes) {
//         res.send(dishes);
//     })
// });