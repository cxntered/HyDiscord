const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    execute(message, args){
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send("Pong! `" + `${Date.now() - message.createdTimestamp}` + " ms`");
  }
    }