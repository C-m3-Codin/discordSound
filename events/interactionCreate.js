const { Events } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
let {music} = require('../Constants/musicConstants.js')


const { createAudioPlayer, NoSubscriberBehavior,createAudioResource,AudioPlayerStatus  } = require('@discordjs/voice');


const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
});


module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) {
            console.log("not chat input command")
			if(interaction.isButton()){
					console.log(music)
				const resource = createAudioResource(music[interaction.customId]["resource"]);
				player.play(resource);
				// await interaction.reply('Pong!');
				const voiceConnection = joinVoiceChannel({
					channelId: "838512527095627806",
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
        };

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};