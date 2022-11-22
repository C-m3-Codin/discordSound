const { Events } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { connectToDB } = require("./../DB/db");
module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag} test mode`);
    console.log(connectToDB);
    connectToDB();
  },
};
