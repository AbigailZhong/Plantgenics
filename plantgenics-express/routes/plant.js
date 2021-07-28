var express = require('express');
var router = express.Router();

var client = require("../mongoconfig/plantConnection");
//var mongodb = require('mongodb');

/* GET plant listing. */
router.get('/', function(req, res, next) {

  client.connect(err => {
    const collection = client.db("plants").collection("plants");

    // perform actions on the collection object
    collection.find().toArray((err,plants)=>{
      res.send(JSON.stringify(plants));
      client.close();
    });
  })

});


router.post('/plant', function(req, res, next) {
  client.connect(err => {
  const collection = client.db("plants").collection("plants");
  // perform actions on the collection object
  client.close();
  });

  let plantName = req.body.name;
  let plantType = req.body.type;
  let plantImage = req.body.image;
  let pricePerOunce = req.body.price;
  console.log("Plant: "+ plantName + " is a " + plantType);
});

module.exports = router;
