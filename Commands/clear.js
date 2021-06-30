const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'clear',
    aliases: [ "purge" ],
    guildOnly: true,
    execute(message, args){
        if(!args[0]) {
            const args404 = new Discord.MessageEmbed() // if someone didn't specify how many messages to delete
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to specify how many messages you want to delete!')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(args404) // error message
        }
        if(args[0] > 100) {
            const over100 = new Discord.MessageEmbed() // if someone tries to delete more than 100 messages
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You can only delete 100 messages at a time.')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(over100) // error message
        }
        message.channel.bulkDelete(args[0]); // delete messages
    }
}
