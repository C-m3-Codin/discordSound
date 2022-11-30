const { SlashCommandBuilder, Client } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

const {
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
} = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    console.log("Pinged");

    await interaction.reply({
      content: "pong",
    });
    setTimeout(() => interaction.deleteReply(), 2000);

    // connection.
  },
};
