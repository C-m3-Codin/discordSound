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
		
        };






var command;

		if(interaction.isButton()){
			console.log(music)

		
	
	 command = interaction.client.commands.get("play")


	}


	else{
		 command = interaction.client.commands.get(interaction.commandName);
	}











	

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			console.log(command)
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};