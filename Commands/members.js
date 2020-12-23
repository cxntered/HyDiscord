const Discord = require('discord.js');
module.exports = {
    name: 'members',
    guildOnly: true,
    execute(message, args){
        message.channel.send(`Total members: ${message.guild.memberCount}`)
    }
}