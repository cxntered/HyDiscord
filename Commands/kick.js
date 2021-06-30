const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'kick',
    guildOnly: true,
    execute(message, args){
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to do this!") // permission check
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.kick('You were kicked.').then(() =>{ // kicks member
                    const kick = new Discord.MessageEmbed()
                        .setAuthor('Kick', 'https://i.imgur.com/OuoECfX.jpeg')
                        .addField('User', `<@${user.id}>`, true)
                        .addField('By', `${message.author}`, true)
                        .setColor(color)
                        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(kick) // kick message
                }).catch(err =>{ // error message
                    const error = new Discord.MessageEmbed()
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription(`I was unable to kick <@${user.id}>`)
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
                .setDescription('You need to @ who you want to kick!')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ping404) // if someone didn't ping user
        }
    }
}
