const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'ban',
    guildOnly: true,
    execute(message, args){
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to do this!") // permission check
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.ban({reason: 'Did a no no :('}).then(() =>{ // bans member
                    const ban = new Discord.MessageEmbed()
                        .setAuthor('Ban', 'https://i.imgur.com/OuoECfX.jpeg')
                        .addField('User', `<@${user.id}>`, true)
                        .addField('By', `${message.author}`, true)
                        .setColor(color)
                        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(ban) // ban message
                }).catch(err =>{
                    const error = new Discord.MessageEmbed()
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription(`I was unable to ban <@${user.id}>`)
                        .setColor(color)
                        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(error) // error message
                });
            } else {
                const user404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('That user isn\'t in the server!')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(user404) // if user isn't in server
            } 
        } else {
            const ping404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to @ who you want to ban!')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ping404) // if someone didn't ping user
        }
    }
}
