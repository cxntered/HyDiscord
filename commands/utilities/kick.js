const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'kick',
    description: 'will kick a user you specify',
    usage: '`h!kick [@User]`',
    example: '`h!kick @cxntered`',
    guildOnly: true,
    async execute(message, args){
        await message.channel.sendTyping()
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            const noperms = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You do not have permission to do this!')
            return message.reply({ embeds: [noperms], allowedMentions: { repliedUser: false } })
        }
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.kick('You were kicked.').then(() =>{ // kicks member
                    const kick = new Discord.MessageEmbed(base)
                        .setAuthor('Kick', 'https://i.imgur.com/OuoECfX.jpeg')
                        .addField('User', `<@${user.id}>`, true)
                        .addField('By', `${message.author}`, true)
                    message.reply({ embeds: [kick], allowedMentions: { repliedUser: false } }) // kick message
                }).catch(err =>{ // error message
                    const error = new Discord.MessageEmbed(base)
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription(`I was unable to kick <@${user.id}>`)
                    message.reply({ embeds: [error], allowedMentions: { repliedUser: false } }) // error message
                });
            } else {
                const user404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('That user isn\'t in the server!')
                message.reply({ embeds: [user404], allowedMentions: { repliedUser: false } }) // if user isn't in server
            } 
        } else {
            const ping404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to @ who you want to kick!')
            message.reply({ embeds: [ping404], allowedMentions: { repliedUser: false } }) // if someone didn't ping user
        }
    }
}
