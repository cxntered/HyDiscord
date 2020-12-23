const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'help',
    execute(message, args){
        if(!args[0]){
        const embed = new Discord.MessageEmbed()
        .setTitle('Help')
        .addField('Hypixel 🎮', '`h!player` \n`h!guild` \n`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!watchdog` \n`h!socials` \n`h!namehistory`', true)
        .addField('Utility 🛠', '`h!help` \n`h!members` \n`h!ping` \n`h!invite` \n`h!clear` \n`h!ban` \n`h!kick`', true) 
        .setDescription('Do `!help [command]` to see what that command does.')
        .setColor(color)
        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.author.send(embed)
        .then(() => {
            if (message.channel.type === 'dm') return;
            message.channel.send('I sent you a DM containing the information!')
        })
        .catch(e => {
            message.channel.send('I could not send the DM. Check if you have DMs disabled.')
        });
        }
        switch(args[0]) {
            case 'ping':
                const ping = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!ping', '`h!ping` will send a "Pong!" along with your current ping.')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(ping)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'members':
                const members = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!members', '`h!members` will send you the current member count of the server you are in.')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(members)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'invite':
                const invite = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!invite', '`h!invite` will send you a link to invite the bot aswell as a link to join the HyDiscord server')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(invite)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'ban':
                const ban = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!ban', '`h!ban` will ban a user you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(ban)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'kick':
                const kick = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!kick', '`h!kick` will kick a user you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(kick)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'clear':
                const clear = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!clear', '`h!clear` will clear a specific number of messages you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(clear)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'player':
                const player = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!player', '`h!player` will show you the Hypixel stats of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(player)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'bedwars':
            case 'bw':
                const bedwars = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!bedwars', '`h!bedwars` will show you the BedWars stats of a user')
                .addField('Aliases', '`h!bw`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(bedwars)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'skywars':
            case 'sw':
                const skywars = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!skywars', '`h!skywars` will show you the SkyWars stats of a user')
                .addField('Aliases', '`h!sw`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(skywars)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'uhc':
                const uhc = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!uhc', '`h!uhc` will show you the UHC stats of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(uhc)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'speeduhc':
            case 'suhc':
                const speeduhc = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!speeduhc', '`h!speeduhc` will show you the SpeedUHC stats of a user')
                .addField('Aliases', '`h!suhc`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(speeduhc)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'watchdog':
            case 'wdr':
                const watchdog = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!watchdog', '`h!watchdog` will show you Watchdog stats')
                .addField('Aliases', '`h!wdr`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(watchdog)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'namehistory':
            case 'nh':
                const namehistory = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!namehistory', '`h!namehistory` will show you the name history of a user')
                .addField('Aliases', '`h!nh`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(namehistory)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'guild':
                const guild = new Discord.MessageEmbed()
                .setTitle('Help')
                .addField('h!guild', '`h!guild` will show you the stats of a guild')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(guild)
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => {
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
        }
    }
}
