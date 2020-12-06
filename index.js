const Discord = require('discord.js');
require('dotenv-flow').config();

const bot = new Discord.Client();

const prefix = '!';

bot.login(process.env.TOKEN);

bot.on('message', (msg) => {
    if (msg.content.toUpperCase().startsWith(prefix + "PING")) {
        msg.reply("Pong!");
    } else if (msg.content.toUpperCase().startsWith(prefix + "HELLO") || msg.content.toUpperCase().startsWith(prefix + "HI")) {
        let second = msg.content.split(" ")[1];
        msg.reply("Hello " + second);
    }
});