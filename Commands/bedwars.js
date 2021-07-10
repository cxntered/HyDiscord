const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'bedwars',
    aliases: [ "bw", "b" ],
    execute(message, args) {
            if (!args[0]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!bedwars cxntered`)')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(ign404)
            }
            hypixelAPIReborn.getPlayer(args[0]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor('BedWars Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                    .addField('Level', `\`${player.stats.bedwars.level}✫\``, true)
                    .addField('KD Ratio:', `\`${player.stats.bedwars.KDRatio}\``, true)
                    .addField('Final KD Ratio:', `\`${player.stats.bedwars.finalKDRatio}\``, true)
                    .addField('WL Ratio:', `\`${player.stats.bedwars.WLRatio}\``, true)
                    .addField('Bed Breaks:', `\`${commaNumber(player.stats.bedwars.beds.broken)}\``, true)
                    .addField('Beds Lost:', `\`${commaNumber(player.stats.bedwars.beds.lost)}\``, true)
                    .addField('Bed BL Ratio:', `\`${player.stats.bedwars.beds.BLRatio}\``, true)
                    .addField('Coins:', `\`${commaNumber(player.stats.bedwars.coins)}\``, true)
                    .addField('Total Deaths:', `\`${commaNumber(player.stats.bedwars.deaths)}\``, true)
                    .addField('Final Deaths:', `\`${commaNumber(player.stats.bedwars.finalDeaths)}\``, true)
                    .addField('Total Kills:', `\`${commaNumber(player.stats.bedwars.kills)}\``, true)
                    .addField('Total Final Kills:', `\`${commaNumber(player.stats.bedwars.finalKills)}\``, true)
                    .addField('Winstreak:', `\`${commaNumber(player.stats.bedwars.winstreak)}\``, true)
                    .addField('Total Wins:', `\`${commaNumber(player.stats.bedwars.wins)}\``, true)
                    .addField('Iron Collected:', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.iron)}\``, true)
                    .addField('Gold Collected:', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.gold)}\``, true)
                    .addField('Diamonds Collected:', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.diamond)}\``, true)
                    .addField('Emeralds Collected:', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.emerald)}\``, true)

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
