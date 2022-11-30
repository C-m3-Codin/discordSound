const {
  SlashCommandBuilder,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { music } = require("./musicConstants");

// const music = require("./musicConstants");

const row1 = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId("1")
    .setLabel(music["1"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("2")
    .setLabel(music["2"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("3")
    .setLabel(music["3"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("4")
    .setLabel(music["4"]["name"])
    .setStyle(ButtonStyle.Primary)
);
const row2 = new ActionRowBuilder().addComponents(
  new ButtonBuilder()
    .setCustomId("5")
    .setLabel(music["5"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("6")
    .setLabel(music["6"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("7")
    .setLabel(music["7"]["name"])
    .setStyle(ButtonStyle.Primary),
  new ButtonBuilder()
    .setCustomId("8")
    .setLabel(music["8"]["name"])
    .setStyle(ButtonStyle.Primary)
);

exports.row1 = row1;
exports.row2 = row2;
