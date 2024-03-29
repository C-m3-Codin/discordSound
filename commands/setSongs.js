const { SlashCommandBuilder } = require("discord.js");
const { setA, music } = require("../Constants/musicConstants.js");
const { addMusicToTile } = require("./../DB/db");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("setsong")
    .setDescription("set songs for tile")
    .addStringOption((option) =>
      option
        .setName("tile")
        .setDescription("The input to echo back")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("link")
        .setDescription("The input to echo back")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("label")
        .setDescription("Name of the tile")
        .setRequired(true)
    ),
  async execute(interaction) {
    console.log(music);
    addMusicToTile(
      interaction.guildId,
      interaction.options.getString("tile"),
      interaction.options.getString("link"),
      interaction.options.getString("label")
    );
    console.log(music);
    console.log(interaction.options.getString("link"));
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(`This music is set on tile.`);
    setTimeout(() => interaction.deleteReply(), 2000);
  },
};
