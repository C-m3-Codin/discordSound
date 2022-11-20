const { Events } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag} test mode`);
	},
};