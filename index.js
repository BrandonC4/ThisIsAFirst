const Discord = require('discord.js');
const client = new Discord.Client();
const {token , prefix} = require('./config.json')
client.once("ready", () => {
   console.log(`${client.user.username} is online!`)
});

client.login(token)