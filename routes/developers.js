var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');

/* GET developers listing. */
router.get('/', function(req, res, next) {
  let developer = { firstname: "Jason", lastname: "Monroe", favoriteLanguage:"JavaScript", yearStarted: 1999}
  res.send(JSON.stringify(developer));
});

router.post('/developer', function(req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let favoriteLanguage = req.body.favoriteLanguage;
  let yearStarted = req.body.yearStarted;
  console.log("Developer being posted: "+firstName+ " "+lastName);
});

module.exports = router;
