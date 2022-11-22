const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs");
const { music } = require("./../Constants/musicConstants");
// const credentials = './cert.pem'
const uri =
  "mongodb+srv://root_cp_pass:Mamaijustroot_cp_pass@cluster0.iaquulw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports.connectToDB = async function () {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("gonna close");
    // await client.close();
    console.log("closed");
    // return
  }
  console.log("exiting");
};

module.exports.getDBJson = async function (channelId) {
  const database = client.db("testDB");
  const collection = database.collection("testCol");

  const doc = await collection.findOne({ _id: channelId });
  // console.log(findResult);
  // console.log(doc);
  return doc;
};

module.exports.setUpDb = async function (channelId) {
  const database = client.db("testDB");
  const collection = database.collection("testCol");

  const doc = await collection.insertOne({ _id: channelId, button: music });
  // console.log(findResult);
  // console.log(doc);
  return doc;
};
