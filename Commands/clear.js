const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    aliases: [ "purge" ],
    guildOnly: true,
    execute(message, args){
        if(!args[0]) return message.channel.send('Error: Please define second argument')
        if(args[0] > 100) return message.channel.send("You can only delete 100 messages at a time.");
        message.channel.bulkDelete(args[0]);
    }
}
