
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://BDadmin:Bobbydole1@cluster0.urjpj.mongodb.net/FAM_SITE?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err => {
  const collection = client.db("FAM_SITE").collection("devices");
  collection.insertOne({a: 1}, function (err, result) {
    console.log(err, result)
  });

  // perform actions on the collection object
  client.close();
});
