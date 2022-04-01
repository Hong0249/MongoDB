const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.eltes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect( async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Database connected');
    console.time('Time used'); // start time of operation

     let faker = require("./faker.js");
     let hash = require("./hash.js");
     
    client.db('Account').collection('User Details').insertOne({        
              User: faker.randomName,                           
              Email: faker.randomEmail,
              Phone: faker.randomPhoneNumber,
              Password: hash.hashpass
            });

    console.log('Operation completed')
    console.timeEnd('Time used'); // end time of operation
    
});