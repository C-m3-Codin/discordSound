const { SlashCommandBuilder } = require("discord.js");
let { music } = require("../Constants/musicConstants.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { getDBJson } = require("./../DB/db");
const {
  createAudioPlayer,
  NoSubscriberBehavior,
  createAudioResource,
  AudioPlayerStatus,
} = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("PLay Song")
    .addStringOption((option) =>
      option
        .setName("num")
        .setDescription("tile number to play")
        .setRequired(true)
    ),

  async execute(interaction) {
    const usr = await interaction.guild.members.cache.get(interaction.user.id);
    // console.log(usr);
    var jsonDb = await getDBJson(interaction.guildId);
    console.log(interaction.guildId);
    console.log();
    // console.log("voice channel ?", usr.voice.channel);
    if (usr.voice.channel) {
      const player = createAudioPlayer({
        behaviors: {
          noSubscriber: NoSubscriberBehavior.Pause,
        },
      });
      console.log(
        "music url",
        jsonDb["button"][interaction.customId]["resource"]
      );
      const resource = createAudioResource(
        jsonDb["button"][interaction.customId]["resource"]
      );

      player.play(resource);
      // await interaction.reply('Pong!');
      const voiceConnection = joinVoiceChannel({
        channelId: usr.voice.channel.id,
        guildId: interaction.guildId,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });
      console.log("should have connected");
      voiceConnection.subscribe(player);

      player.on(AudioPlayerStatus.Idle, () => {
        setTimeout(() => {
          //   message.channel.send('<:Bye:958269757541466145> **Queue finished... Leaving!**')

          console.log(
            "playing",
            AudioPlayerStatus.Playing,
            " idle ",
            AudioPlayerStatus.Idle
          );
          voiceConnection.disconnect();
        }, 5000);
      });

      interaction.deferUpdate().then().catch(console.error);
    }
  },
};
