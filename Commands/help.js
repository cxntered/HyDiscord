const Discord = require('discord.js');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
module.exports = {
    name: 'help',
    execute(message, args){
        if(!args[0]){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addField('Utility 🛠', '`h!help` \n`h!members` \n`h!ping` \n`h!invite` \n`h!clear` \n`h!ban` \n`h!kick`', true) 
        .addField('Hypixel 🎮', '`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!watchdog` \n`h!socials` \n`h!namehistory`', true)
        .setDescription('Do `!help [command]` to see what that command does.')
        .setColor(color)
        .setFooter(footer)
        message.channel.send('I sent you a DM containing the information!')
        message.author.send(embed)
        } 
        switch(args[0]) {
            case 'ping':
                const ping = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!ping', '`h!ping` will send a "Pong!" along with your current ping.')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(ping)
            break;
            case 'members':
                const members = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!members', '`h!members` will send you the current member count of the server you are in.')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(members)
            break;
            case 'invite':
                const invite = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!invite', '`h!invite` will send you a link to invite the bot aswell as a link to join the HyDiscord server')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(invite)
            break;
            case 'ban':
                const ban = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!ban', '`h!ban` will ban a user you specify')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(ban)
            break;
            case 'kick':
                const kick = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!kick', '`h!kick` will kick a user you specify')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(kick)
            break;
            case 'clear':
                const clear = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!clear', '`h!clear` will clear a specific number of messages you specify')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(clear)
            break;
            case 'player':
                const player = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!player', '`h!player` will show you the Hypixel stats of a user')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(player)
            break;
            case 'bedwars':
            case 'bw':
                const bedwars = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!bedwars', '`h!bedwars` will show you the BedWars stats of a user')
                .addField('Aliases', '`h!bw`')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(bedwars)
            break;
            case 'skywars':
            case 'sw':
                const skywars = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!skywars', '`h!skywars` will show you the SkyWars stats of a user')
                .addField('Aliases', '`h!sw`')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(skywars)
            break;
            case 'uhc':
                const uhc = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!uhc', '`h!uhc` will show you the UHC stats of a user')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(uhc)
            break;
            case 'speeduhc':
            case 'suhc':
                const speeduhc = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!speeduhc', '`h!speeduhc` will show you the SpeedUHC stats of a user')
                .addField('Aliases', '`h!suhc`')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(speeduhc)
            break;
            case 'watchdog':
            case 'wdr':
                const watchdog = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!watchdog', '`h!watchdog` will show you Watchdog stats')
                .addField('Aliases', '`h!wdr`')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(watchdog)
            break;
            case 'namehistory':
            case 'nh':
                const namehistory = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!namehistory', '`h!namehistory` will show you the name history of a user')
                .addField('Aliases', '`h!nh`')
                .setColor(color)
                .setFooter(footer)
                message.channel.send('I sent you a DM containing the information!')
                message.author.send(namehistory)
            break;
        }
    }
}
