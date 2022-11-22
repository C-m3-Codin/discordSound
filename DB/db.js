
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

// const credentials = './cert.pem'
const uri = "mongodb+srv://root_cp_pass:Mamaijustroot_cp_pass@cluster0.iaquulw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


// async function makeConnection(){
//     try {
//         client.connect();
//         console.log("Connecting")
//     }
//     catch{
//         console.log("Error on connect")
//     }
//     finally{
//                 console.log("connected")
//     }
// }


module.exports.connectToDB = async function () {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount =  await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("gonna close")
    await client.close();
    console.log("closed")
    // return
  }
  console.log("exiting")
}


// module.exports=connectToDB



// await makeConnection()

// console.log("exit it")
