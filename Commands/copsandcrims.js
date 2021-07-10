const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'copsandcrims',
    aliases: [ "c&c", "cac", "cvc", "cops", "crims" ],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!copsandcrims cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setAuthor('Cops and Crims Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/CVC-64.png')
                .addField('Coins:', `\`${commaNumber(player.stats.copsandcrims.coins)}\``, true)
                .addField('Wins:', `\`${commaNumber(player.stats.copsandcrims.wins)}\``, true)
                .addField('Round Wins:', `\`${commaNumber(player.stats.copsandcrims.roundWins)}\``, true)
                .addField('Kills:', `\`${commaNumber(player.stats.copsandcrims.kills)}\``, true)
                .addField('Criminal Kills:', `\`${commaNumber(player.stats.copsandcrims.killsAsCrim)}\``, true)
                .addField('Cop Kills:', `\`${commaNumber(player.stats.copsandcrims.killsAsCop)}\``, true)
                .addField('Deathes:', `\`${commaNumber(player.stats.copsandcrims.deaths)}\``, true)
                .addField('Deathmatch Kills:', `\`${commaNumber(player.stats.copsandcrims.deathmatch.kills )}\``, true)
                .addField('Headshot Kills:', `\`${commaNumber(player.stats.copsandcrims.headshotKills)}\``, true)
                .addField('Bombs Defused:', `\`${commaNumber(player.stats.copsandcrims.bombsDefused)}\``, true)
                .addField('Bombs Planted:', `\`${commaNumber(player.stats.copsandcrims.bombsPlanted)}\``, true)
                .addField('KD Ratio:', `\`${commaNumber(player.stats.copsandcrims.KDRatio)}\``, true)

            message.channel.send(embed);

        }).catch(e => { // error messages
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const player404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that player in the API. Check spelling and name history.')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(player404)
            } else {
                if (args[0]) {
                    const error = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(error)
                }
            }       
        });
    }
}