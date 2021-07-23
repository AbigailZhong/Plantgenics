var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');

let plants = [
  {id: 1, name: "Zinnia", type: "flower", image: "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/Zinnia-Show-Stopper-Mix-1-mac_medium.jpg", price: 11.95 },
  {id: 2, name: "Bell Pepper", type: "vegetable", image: "https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVPEP153-1_medium.jpg", price: 34.95 },
  {id: 3, name: "Thyme", type: "herb", image: "https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHTHY112-1_medium.jpg", price: 52.95 },
  {id: 4, name: "Fennel", type: "vegetable", image: "https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHFEN112-1_medium.jpg", price: 23.95 },
  {id: 5, name: "Lobelia", type: "flower", image: "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/Lobelia-Blue-Compact-2_medium.jpg", price: 5.95 },
  {id: 6, name: "Chamomile", type: "herb", image: "https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHCHA112-1_medium.jpg", price: 52.95 }
]

/* GET plant listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(plants));
});


router.post('/plant', function(req, res, next) {
  let plantName = req.body.name;
  let plantType = req.body.type;
  let plantImage = req.body.image;
  let pricePerOunce = req.body.price;
  console.log("Plant: "+ plantName + " is a " + plantType);
});

module.exports = router;
