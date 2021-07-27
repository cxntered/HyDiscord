const Discord = require('discord.js')
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'links',
    aliases: [ "invite" ],
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setAuthor('Links', 'https://i.imgur.com/OuoECfX.jpeg')
            .setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
            .addField('Invite Link', 'https://hydiscord.github.io/invite')
            .addField('Website', 'https://hydiscord.github.io')
            .addField('Discord Server', 'https://hydiscord.github.io/discord')
            .addField('Vote', 'https://hydiscord.github.io/vote')
            .addField('Forums Post', 'https://hydiscord.github.io/forums')
            .addField('GitHub', 'https://hydiscord.github.io/github')
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
         message.channel.send(embed)
    }
}