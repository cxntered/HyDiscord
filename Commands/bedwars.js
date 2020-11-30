const Discord = require('discord.js');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'bedwars',
    aliases: [ "bw" ],
    execute(message, args) {
            hypixelAPIReborn.getPlayer(args[0]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('BedWars Stats')
                    .setColor(color)
                    .setFooter(footer)
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                    .addField('Level (Star)', player.stats.bedwars.level, true)
                    .addField('KD Ratio:', player.stats.bedwars.KDRatio, true)
                    .addField('Final KD Ratio:', player.stats.bedwars.finalKDRatio, true)
                    .addField('WL Ratio:', player.stats.bedwars.WLRatio, true)
                    .addField('Bed Breaks:', player.stats.bedwars.beds.broken, true)
                    .addField('Beds Lost:', player.stats.bedwars.beds.lost, true)
                    //.addField('Bed BL Ratio:', player.stats.bedwars.beds.BLRatio, true)
                    .addField('Coins:', player.stats.bedwars.coins, true)
                    .addField('Total Deaths:', player.stats.bedwars.deaths, true)
                    .addField('Final Deaths:', player.stats.bedwars.finalDeaths, true)
                    .addField('Total Kills:', player.stats.bedwars.kills, true)
                    .addField('Total Final Kills:', player.stats.bedwars.finalKills, true)
                    .addField('Winstreak:', player.stats.bedwars.winstreak, true)
                    .addField('Total Wins:', player.stats.bedwars.wins, true)

                message.channel.send(embed);
            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
    }
}
