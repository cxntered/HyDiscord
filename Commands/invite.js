const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Invite')
        .addField('HyDiscord', 'https://bit.ly/HyDiscord')
        .addField('HyDiscord Server', 'https://bit.ly/HyDiscordServer')
        .setColor('0x738ADB')
        .setFooter('HyDiscord - Made by cxntered')
        message.channel.send('I sent you a DM containing the information!')
        message.author.send(embed)
    }
}
