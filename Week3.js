const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv-connection-string";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect( async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Database connected');
    console.time('Time used'); // start time of operation

    let result = await client.db('Week03').collection('companies').insertOne({      // promise insert only a document   
         name: 'Zenfolio',                                                           // await: wait until promise is resolve before moving on
         address: {
            street: '123 Main St',
             city: 'New York',
             state: 'NY',
             zip: '10001'
         }
       }); 
    
    console.log(result);
    console.log(result.insertedId); // print inserted id
    console.log(await client.db('Week03').collection('companies').countDocuments()) // count documents in collection
    

    client.db('Week03').collection('companies').deleteMany({    // promise delete all the documents with the given criteria
        Name: 'Zenfolio'
    }).then(result => {
        console.log('Deleted ' + result.deletedCount + ' documents');
    });

    client.db('Week03').collection('companies').drop(); // delete collection

    console.log('Operation completed')
    console.timeEnd('Time used'); // end time of operation
    
});


