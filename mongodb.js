const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = mongodb

// const id = new ObjectID()
// console.log(id) 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable To Connect The Database.')
    }

    console.log('Connected Successfully.')

    const db = client.db(databaseName)

    /// CRUD Operation
    
    /// Insert Operation

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Test Description',
    //         completed: true
    //     },
    //     {
    //         description: 'Clean The House',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable To Insert Tasks.')
    //     }
    //     console.log(result.ops)
    // })

    /// Fetch Data

    // db.collection('users').findOne({age: 23}, (error, user) => {
    //     if(error){
    //         return console.log('Unable To Find User.')
    //     }
    //     console.log(user._id)
    // })

    // db.collection('users').find({age: 24}).toArray((error, user) => {
    //     if(error){
    //         return console.log('Unable To Find User.')
    //     }
    //     console.log(user[0].name)
    // })

    /// Update Operation

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e20b249f788bc00ac3cc20b")
    // }, {
    //     $set: {
    //         name: 'Smith'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    /// Delete Operation

     db.collection('users').deleteMany({
        name: 'Mike'
     }).then((result) => {
        console.log(result.deletedCount)
     }).catch((error) => {
        console.log(error)
     })  
})