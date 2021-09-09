const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'ban',
    description: 'will ban a user you specify',
    usage: '`h!ban [@User]`',
    example: '`h!ban @cxntered`',
    guildOnly: true,
    async execute(message, args){
        const user = message.mentions.users.first();
        await message.channel.sendTyping()
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            const noperms = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You do not have permission to do this!')
            return message.reply({ embeds: [noperms], allowedMentions: { repliedUser: false } })
        }
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.ban({reason: 'Did a no no :('}).then(() =>{ // bans member
                    const ban = new Discord.MessageEmbed(base)
                        .setAuthor('Ban', 'https://i.imgur.com/OuoECfX.jpeg')
                        .addField('User', `<@${user.id}>`, true)
                        .addField('By', `${message.author}`, true)
                    message.reply({ embeds: [ban] }) // ban message
                }).catch(err =>{
                    const error = new Discord.MessageEmbed(base)
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription(`I was unable to ban <@${user.id}>`)
                    message.reply({ embeds: [error] }) // error message
                });
            } else {
                const user404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('That user isn\'t in the server!')
                message.reply({ embeds: [user404] }) // if user isn't in server
            } 
        } else {
            const ping404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to @ who you want to ban!')
            message.reply({ embeds: [ping404] }) // if someone didn't ping user
        }
    }
}