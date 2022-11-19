const { Events } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        const channel = client.channels.cache.get('976631025683816462');
		console.log(`Ready! Logged in as ${client.user.tag} test mode`);
	},
};