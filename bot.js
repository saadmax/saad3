const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("588159442445533232")
setInterval(function() {
channel.send(`3hax 3hax 3hax 3hax 3hax 3hax 3hax 3hax`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
