const { Events } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { connectToDB, setUpDb } = require("./../DB/db");
module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag} test mode`);
    // console.log(connectToDB);
    console.log("tadaaa\n\n\n\n\n");
    console.log(client);
    await connectToDB();
    await setUpDb();
  },
};
