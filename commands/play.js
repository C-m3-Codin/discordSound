const { SlashCommandBuilder } = require('discord.js');
let {music} = require('../Constants/musicConstants.js')
const { joinVoiceChannel } = require('@discordjs/voice');

const { createAudioPlayer, NoSubscriberBehavior,createAudioResource,AudioPlayerStatus  } = require('@discordjs/voice');


module.exports = {
	data: new SlashCommandBuilder()
	.setName('play')
	.setDescription('PLay Song')
	.addStringOption(option =>
		option.setName('num')
			.setDescription('tile number to play')
			.setRequired(true)),

	async execute(interaction) {
	  const usr = await interaction.guild.members.cache.get(interaction.user.id);
		console.log(usr)

        console.log("voice channel ?",usr.voice.channel)
        if(usr.voice.channel){

			
const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
});


            const resource = createAudioResource(music[interaction.customId]["resource"]);

		player.play(resource);
		// await interaction.reply('Pong!');
		const voiceConnection = joinVoiceChannel({
			channelId: usr.voice.channel.id,
			guildId:interaction.guildId,
			adapterCreator:interaction.guild.voiceAdapterCreator ,
		});
		console.log("should have connected")
		voiceConnection.subscribe(player);


		player.on(AudioPlayerStatus.Idle, () => {
			setTimeout(() => {
			//   message.channel.send('<:Bye:958269757541466145> **Queue finished... Leaving!**')
			voiceConnection.disconnect();
			}, 5000);
		  })

		  interaction.deferUpdate()
.then()
.catch(console.error);



        }
		
	},
};