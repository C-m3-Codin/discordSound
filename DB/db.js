const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs");
const { music } = require("./../Constants/musicConstants");
// const credentials = './cert.pem'
const uri =
  "mongodb+srv://root_cp_pass:Mamaijustroot_cp_pass@cluster0.iaquulw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

module.exports.connectToDB = async function () {
  try {
    console.log("Connecting to DB..");
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error

    // await client.close();
    console.log("Connected");
    // return
  }
};

module.exports.getDBJson = async function (channelId) {
  const database = client.db("testDB");
  const collection = database.collection("testCol");

  const doc = await collection.findOne({ _id: channelId });
  // console.log(findResult);
  // console.log(doc);
  return doc;
};

module.exports.setUpDb = async function (guildId) {
  const database = client.db("testDB");
  const collection = database.collection("testCol");

  const doc = await collection.insertOne({ _id: guildId, button: music });
  // console.log(findResult);
  // console.log(doc);
  return doc;
};

module.exports.addMusicToTile = async function (guildId, buttonNumber, url) {
  const database = client.db("testDB");
  const collection = database.collection("testCol");

  // create a filter for a movie to update
  // const filter = { _id: guildId };
  // this option instructs the method to create a document if no documents match the filter
  const options = { upsert: true };
  // create a document that sets the plot of the movie
  var buttonNam = `button.${buttonNumber}.name`;
  var res = `button.${buttonNumber}.resource`;
  const updateDoc = {
    $set: {
      [buttonNam]: "Name",
      [res]: url,
    },
  };
  const result = await collection.findOneAndUpdate(
    { _id: guildId },
    updateDoc,
    options
  );
  // console.log(findResult);
  // console.log(doc);
  console.log(
    `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
  );
  // return doc;
};
