const { ObjectID } = require('bson');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.eltes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect( async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Database connected');
    console.time('Time used');

     let result = await client.db('sample_training').collection('posts').find(
         { 'tags': { $elemMatch: {$eq: 'bottom'}}}).toArray(); // promise find all documents with the given criteria in their tags array

    // let result = await client.db('Week03').collection('companies').updateOne(
    //     { _id: ObjectID("6246c0d9ac472d1f3b2ed69f") },
        //{ name: 'Zenfolio',},
        //  { $set: { likes: 1 } })
        //  { $unset: { likes: 1 } },
        //  { $inc: { likes: 4 } }, // increment the likes by 0
        //  { $min: { likes: 3 } }, // set the likes to the minimum of 0
        //  { $max: { likes: 8 } }, // set the likes to the maximum of 0
        //  { $set: { comments: [
        //      "bad",
        //      "good",
        //      "excellent"
        //  ] } }, // set the value of a field in a document
        // { $unset: { comments } }, // remove a field from a document
        // { $addToSet: { comments: 'new' } } ) // add a value to an array only if the value is not already present in the array
        // { $pop: { comments: -1 } },  // remove the last element (smallest number) of an array
        // { $pop: { comments: 1 } },  // remove the first element (largest number) of an array
        // { $push: { comments: 'new' } }, // add a value to an array
        // { $pull: { comments: 'new' } }, // remove a value from an array
    // )
    console.log(result);
    console.log('Operation completed')
    console.timeEnd('Time used'); // end time of operation
})


