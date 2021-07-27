const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json');
module.exports = {
    name: 'help',
    aliases: [ "commands", "commandlist" ],
    execute(message, args){
        if(!args[0]){ // general help message
        const embed = new Discord.MessageEmbed()
        .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
        .addField('Hypixel 🎮', '`h!player` \n`h!guild` \n`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!speeduhc` \n`h!blitzsurvivalgames` \n`h!buildbattle` \n`h!copsandcrims` \n`h!crazywalls` \n`h!megawalls` \n`h!murdermystery` \n`h!smashheroes` \n`h!tntgames` \n`h!vampirez` \n`h!socials`', true)
        .addField('Utility 🛠', '`h!help` \n`h!info` \n`h!members` \n`h!ping` \n`h!links` \n`h!vote` \n`h!clear` \n`h!ban` \n`h!kick` \n`h!suggest` \n`h!coinflip` \n`h!rng`', true)
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
                .addField('Usage', '`h!help <Command>`')
                .addField('Example', '`h!help`, `h!help bedwars`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(help)
            break;
            case 'info':
                const info = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!info', '`h!help` will show info about HyDiscord.')
                .addField('Usage', '`h!info`')
                .addField('Example', '`h!info`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(info)
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
                .addField('Usage', '`h!ban [@User]`')
                .addField('Example', '`h!ban @cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ban)
            break;
            case 'kick':
                const kick = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!kick', '`h!kick` will kick a user you specify')
                .addField('Usage', '`h!kick [@User]`')
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
                .addField('h!player', '`h!player` will show you the Hypixel stats of a player')
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
                .addField('h!bedwars', '`h!bedwars` will show you the BedWars stats of a player')
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
                .addField('h!duels', '`h!duels` will show you the Duels stats of a player')
                .addField('Aliases', '`h!d`')
                .addField('Usage', '`h!duels [Mode] [IGN]`')
                .addField('Example', '`h!duels classic cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(duels)
            break;
            case 'socials':
                const socials = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!socials', '`h!socials` will show you the social medias of a player')
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
                .addField('h!skywars', '`h!skywars` will show you the SkyWars stats of a player')
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
                .addField('h!uhc', '`h!uhc` will show you the UHC stats of a player')
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
                .addField('h!speeduhc', '`h!speeduhc` will show you the SpeedUHC stats of a player')
                .addField('Aliases', '`h!suhc`')
                .addField('Usage', '`h!speeduhc [IGN]`')
                .addField('Example', '`h!speeduhc cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(speeduhc)
            break;
            case 'blitzsurvivalgames':
            case 'blitz':
            case 'survivalgames':
            case 'sg':
                const blitzsurvivalgames = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!blitzsurvivalgames', '`h!blitzsurvivalgames` will show you the Blitz Survival Games stats of a player')
                .addField('Aliases', '`h!blitz`, `h!survivalgames`, `h!sg`')
                .addField('Usage', '`h!blitzsurvivalgames [IGN]`')
                .addField('Example', '`h!blitzsurvivalgames cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(blitzsurvivalgames)
            break;
            case 'buildbattle':
            case 'bb':
            case 'build':
                const buildbattle = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!buildbattle', '`h!buildbattle` will show you the Build Battle stats of a player')
                .addField('Aliases', '`h!bb`, `h!build`')
                .addField('Usage', '`h!buildbattle [IGN]`')
                .addField('Example', '`h!buildbattle cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(buildbattle)
            break;
            case 'copsandcrims':
            case 'cac':
            case 'cvc':
            case 'c&c':
            case 'cops':
            case 'crims':
                const copsandcrims = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!copsandcrims', '`h!copsandcrims` will show you the Cops and Crims stats of a player')
                .addField('Aliases', '`h!c&c`, `h!cac`, `h!cvc`, `h!cops`, `h!crims`')
                .addField('Usage', '`h!copsandcrims [IGN]`')
                .addField('Example', '`h!copsandcrims cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(copsandcrims)
            break;
            case 'crazywalls':
            case 'cw':
                const crazywalls = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!crazywalls', '`h!crazywalls` will show you the Crazy Walls stats of a player')
                .addField('Aliases', '`h!cw`')
                .addField('Usage', '`h!crazywalls [IGN]`')
                .addField('Example', '`h!crazywalls cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(crazywalls)
            break;
            case 'megawalls':
            case 'mw':
                const megawalls = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!megawalls', '`h!megawalls` will show you the Mega Walls stats of a player')
                .addField('Aliases', '`h!mw`')
                .addField('Usage', '`h!megawalls [IGN]`')
                .addField('Example', '`h!megawalls cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(megawalls)
            break;
            case 'murdermystery':
            case 'mm':
            case 'murder':
            case 'mystery':
                const murdermystery = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!murdermystery', '`h!murdermystery` will show you the Murder Mystery stats of a player')
                .addField('Aliases', '`h!mm`, `h!murder`, `h!mystery`')
                .addField('Usage', '`h!murdermystery [IGN]`')
                .addField('Example', '`h!murdermystery cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(murdermystery)
            break;
            case 'smashheroes':
            case 'sh':
            case 'smash':
                const smashheroes = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!smashheroes', '`h!smashheroes` will show you the Smash Heroes stats of a player')
                .addField('Aliases', '`h!sh`, `h!smash`')
                .addField('Usage', '`h!smashheroes [IGN]`')
                .addField('Example', '`h!smashheroes cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(smashheroes)
            break;
            case 'tntgames':
            case 'tnt':
                const tntgames = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!tntgames', '`h!tntgames` will show you TNT Games stats of a player')
                .addField('Aliases', '`h!tnt`')
                .addField('Usage', '`h!tntgames [IGN]`')
                .addField('Example', '`h!tntgames cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(tntgames)
            break;
            case 'vampirez':
            case 'vampire':
            case 'vampires':
            case 'vampz':
                const vampirez = new Discord.MessageEmbed()
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('h!vampirez', '`h!vampirez` will show you the VampireZ stats of a player')
                .addField('Aliases', '`h!vampire`, `h!vampires`. `h!vampz`')
                .addField('Usage', '`h!vampirez [IGN]`')
                .addField('Example', '`h!vampirez cxntered`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(vampirez)
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
                .addField('h!namehistory', '`h!namehistory` will show you the name history of a player')
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
                .addField('Usage', '`h!guild [Guild]`')
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
                .addField('Usage', '`h!suggest [Suggestion]`')
                .addField('Example', '`h!suggest Add verification!`')
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
                .addField('Usage', '`h!rng [Min] [Max]`')
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
