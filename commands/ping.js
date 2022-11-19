const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {

        console.log("Pinged")
		// await interaction.reply('Pong!');
        const voiceConnection = joinVoiceChannel({
            channelId: "976631025683816462",
            guildId:"976631025683816458",
            adapterCreator:interaction.guild.voiceAdapterCreator ,
        });
        console.log("should have connected",voiceConnection)

        // connection.

	},
};