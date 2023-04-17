const mongodb = require('mongodb')
const mongodbClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbname = 'Task-1'

mongodbClient.connect(connectionUrl , (error , res1)=>{
 const db = res1.db(dbname)
////////////////// to insert two docs
 db.collection('users').insertOne(
    {
       name : "anan",
       age : 22
    }
 )
db.collection('users').insertOne(
   {
      name : "yousef",
      age : 12
   }
)
/////////////////// to insert 10 docs 5 of them with 27 age 
 db.collection('users').insertMany(
 [
   // {
   //    name : "romysaa",
   //    age : 20
   // },
   // {
   //    name : "bsmalla",
   //    age : 16
   // },
   // {
   //    name : "gehan",
   //    age : 47
   // },
   // {
   //    name : "mohsen",
   //    age : 56
   // },
   // {
   //    name : "mazen",
   //    age : 23
   // },
   {
      name : "shrouk",
      age : 27
   },
   {
      name : "nour",
      age : 27
   },
   {
      name : "mena",
      age : 27
   },
   {
      name : "rawan",
      age : 27
   },
   {
      name : "lamiaa",
      age : 27
   }
 ]
  ,(error , data)=>{
if(error){
   console.log('unable to insert data')
}
console.log(data.insertedCount)
  }

 )
//////////////// to find all docs with age 27
db.collection('users').find({age :27}).count((error,users)=>{
   if(error){
      console.log('error has occured')
   }
   console.log(users)
})
///// to find first 4 docs with age 27
db.collection('users').find({age :27}).limit(3).toArray((error , users)=>{
   if(error){
      console.log('unable to find data')
   }
   console.log(users)
})
////// update name of first 4 docs of my data 
db.collection('users').updateOne({_id:mongodb.ObjectId("643c886ff72368679ce165e8")},
{
  $set:{name : "hana"} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c886ff72368679ce165e9")},
{
  $set:{name : "abdallah"} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c886ff72368679ce165ea")},
{
  $set:{name : "mona"} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c886ff72368679ce165eb")},
{
  $set:{name : "manal"} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})

///////////////// inc first 4 docs of 27 age 

db.collection('users').updateOne({_id:mongodb.ObjectId("643c8f6e05e0b0ef2cc48962")},
{
  $inc:{age : 4} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c8f6e05e0b0ef2cc48963")},
{
  $inc:{age : 4} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c8f6e05e0b0ef2cc48964")},
{
  $inc:{age : 4} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})
db.collection('users').updateOne({_id:mongodb.ObjectId("643c8f6e05e0b0ef2cc48965")},
{
  $inc:{age : 4} 
})
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})



//// to inc 10 years for all docs 
db.collection('users').updateMany({},
   {
      $inc:{age : 10}, 
      })
.then((data1)=>{console.log(data1.modifiedCount)})
.catch((error)=>{console.log(error)})


 //// to delete any docs with age 41
db.collection('users').deleteMany({age : 41})
.then((data1)=>{console.log(data1.deletedCount)})
.catch((error)=>{console.log(error)})
})

