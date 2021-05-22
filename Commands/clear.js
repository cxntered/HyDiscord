const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    aliases: [ "purge" ],
    guildOnly: true,
    execute(message, args){
        if(!args[0]) return message.channel.send('You need to specify how many messages you want to delete!') // if someone didn't specify how many messages to delete
        if(args[0] > 100) return message.channel.send("You can only delete 100 messages at a time."); // if someone tries to delete more than 100 messages
        message.channel.bulkDelete(args[0]); // delete messages
    }
}
