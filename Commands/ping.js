const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'ping',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
          .setAuthor('Ping', 'https://i.imgur.com/OuoECfX.jpeg')
          .setDescription("Pong! `" + `${Date.now() - message.createdTimestamp}` + " ms`")
          .setColor(color)
          .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
  }
}