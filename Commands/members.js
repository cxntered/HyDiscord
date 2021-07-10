const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'members',
    guildOnly: true,
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setAuthor('Members', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`Total members: \`${message.guild.memberCount}\``)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
    }
}