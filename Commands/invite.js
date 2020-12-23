const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'invite',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Invite')
        .addField('HyDiscord', 'https://bit.ly/HyDiscord')
        .addField('HyDiscord Server', 'https://bit.ly/HyDiscordServer')
        .setColor(color)
        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send('I sent you a DM containing the information!')
        message.author.send(embed)
    }
}
