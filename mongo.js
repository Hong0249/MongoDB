const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.eltes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if (err) {
        console.log(err.message)
        return
    }
      console.log('Database connected');

    client.db().admin().listDatabases().then(result => {
           console.log(result);
    })              
    // client.db('sample_training').collection('trips').find({'birth year':2000}).toArray().then(result =>{
    //     console.log(result);
    // });
  // perform actions on the collection object
});

client.close();
