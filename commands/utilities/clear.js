const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'clear',
    aliases: [ "purge" ],
    description: 'will delete a specific amount of messages you specify (Up to 100 messages, and you can\'t delete messages older than 14 days)',
    usage: '`h!clear [1-100]`',
    example: '`h!clear 10`',
    guildOnly: true,
    async execute(message, args){
        await message.channel.sendTyping()
        if(!args[0]) {
            const args404 = new Discord.MessageEmbed(base) // if someone didn't specify how many messages to delete
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to specify how many messages you want to delete!')
            message.reply({ embeds: [args404] }) // error message
        }
        if(args[0] > 100) {
            const over100 = new Discord.MessageEmbed(base) // if someone tries to delete more than 100 messages
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You can only delete 100 messages at a time.')
            message.reply({ embeds: [over100] }) // error message
        }
        message.channel.bulkDelete(args[0]); // delete messages
    }
}
