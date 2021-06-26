const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'help',
    execute(message, args){
        if(!args[0]){ // general help message
        const embed = new Discord.MessageEmbed()
        .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
        .addField('Hypixel 🎮', '`h!player` \n`h!guild` \n`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!watchdog` \n`h!socials` \n`h!namehistory` \n`h!uuid` \n`h!skin` \n`h!server`', true)
        .addField('Utility 🛠', '`h!help` \n`h!members` \n`h!ping` \n`h!invite` \n`h!clear` \n`h!ban` \n`h!kick` \n`h!suggest` \n`h!coinflip` \n`h!rng`', true) 
        .setDescription('Do `h!help [command]` to see what that command does.')
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
        switch(args[0]) { // specific command help
            case 'ping':
                const ping = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!ping', '`h!ping` will send a "Pong!" along with your current ping.')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(ping)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'members':
                const members = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!members', '`h!members` will send you the current member count of the server you are in.')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(members)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'invite':
                const invite = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!invite', '`h!invite` will send you a link to invite the bot aswell as a link to join the HyDiscord server')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(invite)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'ban':
                const ban = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!ban', '`h!ban` will ban a user you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(ban)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'kick':
                const kick = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!kick', '`h!kick` will kick a user you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(kick)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'clear':
                const clear = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!clear', '`h!clear` will clear a specific number of messages you specify')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(clear)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'player':
                const player = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!player', '`h!player` will show you the Hypixel stats of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(player)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'bedwars':
            case 'bw':
                const bedwars = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!bedwars', '`h!bedwars` will show you the BedWars stats of a user')
                .addField('Aliases', '`h!bw`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(bedwars)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'duels':
                const duels = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!duels', '`h!duels` will show you the Duels stats of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(duels)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'socials':
                const socials = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!socials', '`h!socials` will show you the social medias of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(socials)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'skywars':
            case 'sw':
                const skywars = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!skywars', '`h!skywars` will show you the SkyWars stats of a user')
                .addField('Aliases', '`h!sw`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(skywars)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'uhc':
                const uhc = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!uhc', '`h!uhc` will show you the UHC stats of a user')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(uhc)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'speeduhc':
            case 'suhc':
                const speeduhc = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!speeduhc', '`h!speeduhc` will show you the SpeedUHC stats of a user')
                .addField('Aliases', '`h!suhc`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(speeduhc)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'watchdog':
            case 'wdr':
                const watchdog = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!watchdog', '`h!watchdog` will show you Watchdog stats')
                .addField('Aliases', '`h!wdr`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(watchdog)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'namehistory':
            case 'nh':
                const namehistory = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!namehistory', '`h!namehistory` will show you the name history of a user')
                .addField('Aliases', '`h!nh`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(namehistory)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'guild':
                const guild = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!guild', '`h!guild` will show you the stats of a guild')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(guild)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'server':
                const server = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!server', '`h!server` will show you info about a server')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(server)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'suggest':
            case 'suggestion':
            case 'suggestfeature':
                const suggest = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!suggest', '`h!suggest` will let you suggest a feature to be added to HyDiscord')
                .addField('Aliases', '`h!suggestion`, `h!suggestfeature`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(suggest)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'rng':
                const rng = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!rng', '`h!rng` will pick a random number between two numbers you choose')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(rng)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'coinflip':
                const coinflip = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!coinflip', '`h!coinflip` will flip a coin for you')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(coinflip)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'uuid':
                const uuid = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!uuid', '`h!uuid` will show you the UUID of a player')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(uuid)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
            case 'skin':
                const skin = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!skin', '`h!skin` will show you the skin of a player, and even let you apply it')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.author.send(skin)
                .then(() => { // dm sent message
                    if (message.channel.type === 'dm') return;
                    message.channel.send('I sent you a DM containing the information!')
                })
                .catch(e => { // error message
                    message.channel.send('I could not send the DM. Check if you have DMs disabled.')
                });
            break;
        }
    }
}
