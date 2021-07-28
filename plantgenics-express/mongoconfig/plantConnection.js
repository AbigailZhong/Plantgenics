const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://944550Plantgenics:944550Plantgenics@plantgenics.x2qql.mongodb.net/plants?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;