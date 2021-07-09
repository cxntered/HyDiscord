const Discord = require('discord.js')
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'vote',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setAuthor('Vote', 'https://i.imgur.com/OuoECfX.jpeg')
            .setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
            .addField('Vote for HyDiscord!', 'https://hydiscord.github.io/vote')
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
         message.channel.send(embed)
    }
}