const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log("Connection established successfully.");
}).catch((err) => console.log(err));

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = DB;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("mernstack");
//   // perform actions on the collection object
//   client.close();
// });
