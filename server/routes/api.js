const express = require('express');
const router = express.Router();
var mongojs = require('mongojs')
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
// router.get('/posts', (req, res) => {
//   // Get posts from the mock api
//   // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/posts`)
//     .then(posts => {
//       res.status(200).json(posts.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// });

var db = mongojs("mongodb://lupaxa:lupaxa@ds131583.mlab.com:31583/dishes", ['dishes']);

/* GET api listing. */


router.get('/posts', (req, res) => {
    db.dishes.find(function(err, task){
        if(err){
            res.send(err)
        }
        res.json(task)
    })

});

module.exports = router;