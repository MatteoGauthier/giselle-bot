// Libs Import
const Discord = require('discord.js');
const client = new Discord.Client();

// Config load, contain our client secret (ignored by gitignore)
const config = require("./public_config.json");

// Global Variables
var myArray = ['Hey', 'Hello', 'Bonjour', 'Bonsoir']
const newsEmbed = {"title":"📰 News 📰","description":"Voici les news de l'équipe `naranja`","color":2448747,"footer":{"icon_url":"https://cdn.discordapp.com/embed/avatars/0.png","text":"News Cast"},"fields":[{"name":"1. BeeOne LiveSream","value":"Retrouver sur Twitch les streams de BeeOne ➡ https://semoule.fr/BeeOne"}]  };

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
  const avatarClient = client.user.avatarURL;
  newsEmbed.footer.icon_url = avatarClient;
});

client.on('message', async message => {
  
  // Fallbacks from https://gist.github.com/eslachance/3349734a98d30011bb202f47342601d3
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  
  // Prefix from =
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Local Variables
  var randomValue = myArray[Math.floor(Math.random() * myArray.length)];
  // Commands
  if (command === 'ping') {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  if (command === 'hey') {
    message.channel.send(`${randomValue} comment vas-tu ?`)
  }

  if (command === 'news') {
    message.channel.send({embed: newsEmbed});
  }

});

// Login with secret
client.login(process.env.TOKEN);

// Authorization field https://discordapp.com/oauth2/authorize?client_id=585154615545430054&scope=bot