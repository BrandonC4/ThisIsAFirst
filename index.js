const Discord = require('discord.js');
const client = new Discord.Client();
const {token , prefix} = require('./config.json')
client.once("ready", () => {
   console.log(`${client.user.username} is online!`)
});

client.on("message", async (message) => {
   const args = message.content.slice(prefix.length).split(' ');
   const cmd = args.shift().toLowerCase();

   if(cmd === 'ping') {
      message.reply("pong")
   }
})
client.login(token)