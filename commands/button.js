const {
  SlashCommandBuilder,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { joinVoiceChannel } = require("@discordjs/voice");
let { music } = require("../Constants/musicConstants.js");
const { row1, row2 } = require("../Constants/buttonsConstants");
const { getDBJson } = require("./../DB/db");
const {
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
} = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("button cmd"),
  async execute(interaction) {
    console.log("sounded");
    var jsonDb = await getDBJson(interaction.guildId);
    console.log(jsonDb);

    for (let i = 0; i < 4; i++) {
      // text += cars[i] + "<br>";
      row1.components[i].setLabel(jsonDb["button"][`${i + 1}`]["name"]);
    }
    for (let i = 4; i < 8; i++) {
      // text += cars[i] + "<br>";
      row2.components[i - 4].setLabel(jsonDb["button"][`${i + 1}`]["name"]);
    }

    await interaction.reply({
      content: "I think you should,",
      components: [row1, row2],
    });
    // connection.
  },
};
