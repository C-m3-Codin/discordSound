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

    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      },
    });
    const resource = createAudioResource("./m.mp3");
    player.play(resource);
    // await interaction.reply('Pong!');
    const voiceConnection = joinVoiceChannel({
      channelId: "838512527095627806",
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });
    console.log("should have connected");
    voiceConnection.subscribe(player);

    // connection.
  },
};
