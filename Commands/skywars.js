const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'skywars',
    aliases: ['sw'],
    execute(message, args) {
            if (!args[0]) { // if someone didn't type in ign
                message.channel.send('You need to type in a player\'s IGN! (Example: `h!skywars cxntered`)')
            }
            hypixelAPIReborn.getPlayer(args[0]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('SkyWars Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png')
                    .addField('Level:', player.stats.skywars.level, true)
                    .addField('Heads:', commaNumber(player.stats.skywars.heads), true)
                    .addField('KD Ratio:', player.stats.skywars.KDRatio, true)
                    .addField('WL Ratio:', player.stats.skywars.WLRatio, true)
                    .addField('Coins:', commaNumber(player.stats.skywars.coins), true)
                    .addField('Total Deaths:', commaNumber(player.stats.skywars.deaths), true)
                    .addField('Total Kills:', commaNumber(player.stats.skywars.kills), true)
                    .addField('Winstreak:', commaNumber(player.stats.skywars.winstreak), true)
                    .addField('Total Wins:', commaNumber(player.stats.skywars.wins), true)
                    .addField('Tokens:', commaNumber(player.stats.skywars.tokens), true)
                    .addField('Prestige:', player.stats.skywars.prestige, true)
                    .addField('Souls:', commaNumber(player.stats.skywars.souls), true)
                    .addField('Ranked Kills:', commaNumber(player.stats.skywars.ranked.kills), true)
                    .addField('Ranked Losses:', commaNumber(player.stats.skywars.ranked.losses), true)
                    .addField('Ranked Games Played:', commaNumber(player.stats.skywars.ranked.played), true)
                    .addField('Ranked Wins:', commaNumber(player.stats.skywars.ranked.wins), true)
                    .addField('Ranked KD Ratio:', player.stats.skywars.ranked.KDRatio, true)
                    .addField('Ranked WL Ratio:', player.stats.skywars.ranked.WLRatio, true)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) { // error messages
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    if (args[0]) {
                        message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                    }
                }       
            });
    }
}