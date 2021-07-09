const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'help',
    aliases: [ "commands", "commandlist" ],
    execute(message, args){
        if(!args[0]){ // general help message
        const embed = new Discord.MessageEmbed()
        .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
        .addField('Utility 🛠', '`h!help` \n`h!members` \n`h!ping` \n`h!links` \n`h!vote` \n`h!clear` \n`h!ban` \n`h!kick` \n`h!suggest` \n`h!coinflip` \n`h!rng`', true)
        .addField('Hypixel 🎮', '`h!player` \n`h!guild` \n`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!watchdog` \n`h!socials`', true)
        .addField('Minecraft ⛏', '`h!namehistory` \n`h!uuid` \n`h!skin` \n`h!server`', true)
        .setDescription('Do `h!help [command]` to see what that command does.')
        .setColor(color)
        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
        }
        switch(args[0]) { // specific command help
            case 'help':
            case 'commands':
            case 'commandlist':
                const help = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!help', '`h!help` will show you a list of commands.')
                .addField('Aliases', '`h!commands`, `h!commandlist`')
                .addField('Usage', '`h!help <command>`')
                .addField('Example', '`h!help`, `h!help bedwars`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(help)
            break;
            case 'ping':
                const ping = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!ping', '`h!ping` will send a "Pong!" along with your current ping.')
                .addField('Usage', '`h!ping`')
                .addField('Example', '`h!ping`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ping)
            break;
            case 'members':
                const members = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!members', '`h!members` will send you the current member count of the server you are in.')
                .addField('Usage', '`h!members`')
                .addField('Example', '`h!members`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(members)
            break;
            case 'links':
            case 'invite':
                const links = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!links', '`h!links` will send you links related to HyDiscord')
                .addField('Aliases', '`h!invite`')
                .addField('Usage', '`h!links`')
                .addField('Example', '`h!links`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(links)
            break;
            case 'vote':
                const vote = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!vote', '`h!vote` will send you a link to vote for HyDiscord on Top.gg')
                .addField('Usage', '`h!vote`')
                .addField('Example', '`h!vote`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(vote)
            break;
            case 'ban':
                const ban = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!ban', '`h!ban` will ban a user you specify')
                .addField('Usage', '`h!ban [@user]`')
                .addField('Example', '`h!ban @cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ban)
            break;
            case 'kick':
                const kick = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!kick', '`h!kick` will kick a user you specify')
                .addField('Usage', '`h!kick [@user]`')
                .addField('Example', '`h!kick @cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(kick)
            break;
            case 'clear':
            case 'purge':
                const clear = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!clear', '`h!clear` will clear a specific number of messages you specify')
                .addField('Aliases', '`h!purge`')
                .addField('Usage', '`h!clear [1-100]`')
                .addField('Example', '`h!clear 10`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(clear)
            break;
            case 'player':
            case 'p':
            case 'hypixel':
            case 'h':
                const player = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!player', '`h!player` will show you the Hypixel stats of a user')
                .addField('Aliases', '`h!p`, `h!hypixel`, `h!h`')
                .addField('Usage', '`h!player [IGN]`')
                .addField('Example', '`h!player cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(player)
            break;
            case 'bedwars':
            case 'bw':
            case 'b':
                const bedwars = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!bedwars', '`h!bedwars` will show you the BedWars stats of a user')
                .addField('Aliases', '`h!bw`, `h!b`')
                .addField('Usage', '`h!bedwars [IGN]`')
                .addField('Example', '`h!bedwars cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(bedwars)
            break;
            case 'duels':
            case 'd':
                const duels = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!duels', '`h!duels` will show you the Duels stats of a user')
                .addField('Aliases', '`h!d`')
                .addField('Usage', '`h!duels [mode] [IGN]`')
                .addField('Example', '`h!duels classic cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(duels)
            break;
            case 'socials':
                const socials = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!socials', '`h!socials` will show you the social medias of a user')
                .addField('Usage', '`h!socials [IGN]`')
                .addField('Example', '`h!socials cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(socials)
            break;
            case 'skywars':
            case 'sw':
            case 's':
                const skywars = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!skywars', '`h!skywars` will show you the SkyWars stats of a user')
                .addField('Aliases', '`h!sw`, `h!s`')
                .addField('Usage', '`h!skywars [IGN]`')
                .addField('Example', '`h!skywars cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(skywars)
            break;
            case 'uhc':
                const uhc = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!uhc', '`h!uhc` will show you the UHC stats of a user')
                .addField('Usage', '`h!uhc [IGN]`')
                .addField('Example', '`h!uhc cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(uhc)
            break;
            case 'speeduhc':
            case 'suhc':
                const speeduhc = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!speeduhc', '`h!speeduhc` will show you the SpeedUHC stats of a user')
                .addField('Aliases', '`h!suhc`')
                .addField('Usage', '`h!speeduhc [IGN]`')
                .addField('Example', '`h!speeduhc cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(speeduhc)
            break;
            case 'watchdog':
            case 'wdr':
                const watchdog = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!watchdog', '`h!watchdog` will show you Watchdog stats')
                .addField('Aliases', '`h!wdr`')
                .addField('Usage', '`h!watchdog`')
                .addField('Example', '`h!watchdog`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(watchdog)
            break;
            case 'namehistory':
            case 'nh':
            case 'names':    
                const namehistory = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!namehistory', '`h!namehistory` will show you the name history of a user')
                .addField('Aliases', '`h!nh`, `h!names`')
                .addField('Usage', '`h!namehistory [IGN]`')
                .addField('Example', '`h!namehistory cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(namehistory)
            break;
            case 'guild':
            case 'g':
                const guild = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!guild', '`h!guild` will show you the stats of a guild')
                .addField('Aliases', '`h!g`')
                .addField('Usage', '`h!guild [guild]`')
                .addField('Example', '`h!guild Rebel`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(guild)
            break;
            case 'server':
            case 'ip':
                const server = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!server', '`h!server` will show you info about a server')
                .addField('Aliases', '`h!ip`')
                .addField('Usage', '`h!server [IP]`')
                .addField('Example', '`h!server mc.hypixel.net`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(server)
            break;
            case 'suggest':
            case 'suggestion':
            case 'suggestfeature':
                const suggest = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!suggest', '`h!suggest` will let you suggest a feature to be added to HyDiscord')
                .addField('Aliases', '`h!suggestion`, `h!suggestfeature`')
                .addField('Usage', '`h!suggest [suggestion]`')
                .addField('Example', '`h!suggest Add more gamemodes!`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(suggest)
            break;
            case 'rng':
            case 'random':
                const rng = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!rng', '`h!rng` will pick a random number between two numbers you choose')
                .addField('Aliases', '`h!random`')
                .addField('Usage', '`h!rng [min] [max]`')
                .addField('Example', '`h!rng 1 10`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(rng)
            break;
            case 'coinflip':
            case 'cf':
                const coinflip = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!coinflip', '`h!coinflip` will flip a coin for you')
                .addField('Aliases', '`h!cf`')
                .addField('Usage', '`h!coinflip`')
                .addField('Example', '`h!coinflip`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(coinflip)
            break;
            case 'uuid':
                const uuid = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!uuid', '`h!uuid` will show you the UUID of a player')
                .addField('Usage', '`h!uuid [IGN]`')
                .addField('Example', '`h!uuid cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(uuid)
            break;
            case 'skin':
                const skin = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!skin', '`h!skin` will show you the skin of a player, and even let you apply it')
                .addField('Usage', '`h!skin [IGN]`')
                .addField('Example', '`h!skin cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(skin)
            break;
        }
    }
}
