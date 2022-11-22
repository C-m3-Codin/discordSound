const { Events } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { connectToDB, setUpDb } = require("../DB/db");
module.exports = {
  name: Events.GuildCreate,
  once: true,
  async execute(guild) {
    console.log(`Joined ${guild.name} server`);
    // console.log(connectToDB);
    console.log("tadaaa\n\n\n\n\n");
    console.log(guild.id);
    await setUpDb(guild.id);
  },
};
