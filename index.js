const Discord = require('discord.js');
const client = new Discord.Client();
const {token , prefix} = require('./config.json')
client.on("ready", () => {
   console.log(client.user.username)
});

client.login(token)