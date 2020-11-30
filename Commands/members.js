const Discord = require('discord.js');
module.exports = {
    name: 'members',
    guildOnly: true,
    execute(message, args){
        if (message.channel.type == "dm") {
            message.channel.send("This command is only available in servers.")
            return;
        } 
        message.channel.send(`Total members: ${message.guild.memberCount}`)
    }
}