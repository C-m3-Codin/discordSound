const { SlashCommandBuilder, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
let {music} = require('../Constants/musicConstants.js')
const {row1,row2} = require('../Constants/buttonsConstants')

const { createAudioPlayer, NoSubscriberBehavior,createAudioResource } = require('@discordjs/voice');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('button cmd'),
	async execute(interaction) {


        console.log("sounded")
       
           

    
            await interaction.reply({ content: 'I think you should,', components: [row1,row2] });
        // connection.

	},
};