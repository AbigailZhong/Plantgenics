var express = require('express');
var router = express.Router();

let movies = [
  {title:"Her", players:[{name:"Juaquin Phoenix",character:"Theodore Twombly"}]},
  {title:"Life Aquatic with Steve Zissou", players:[{name:"Bill Murray",character:"Steve Zissou"}]}
]

/* GET movies listing. */
router.get('/', function(req, res, next) {
 
  res.send(JSON.stringify(movies));
});

router.post('/movies', function(req, res, next) {
 
});

module.exports = router;
