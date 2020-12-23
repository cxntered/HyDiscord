const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'skywars',
    aliases: ['sw'],
    execute(message, args) {
            hypixelAPIReborn.getPlayer(args[0]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('SkyWars Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png')
                    .addField('Level:', player.stats.skywars.level, true)
                    .addField('Heads:', player.stats.skywars.heads, true)
                    .addField('KD Ratio:', player.stats.skywars.KDRatio, true)
                    .addField('WL Ratio:', player.stats.skywars.WLRatio, true)
                    .addField('Coins:', player.stats.skywars.coins, true)
                    .addField('Total Deaths:', player.stats.skywars.deaths, true)
                    .addField('Total Kills:', player.stats.skywars.kills, true)
                    .addField('Winstreak:', player.stats.skywars.winstreak, true)
                    .addField('Total Wins:', player.stats.skywars.wins, true)
                    .addField('Tokens:', player.stats.skywars.tokens, true)
                    .addField('Prestige:', player.stats.skywars.prestige, true)
                    .addField('Souls:', player.stats.skywars.souls, true)
                    .addField('Ranked Kills:', player.stats.skywars.ranked.kills, true)
                    .addField('Ranked Losses:', player.stats.skywars.ranked.losses, true)
                    .addField('Ranked Games Played:', player.stats.skywars.ranked.played, true)
                    .addField('Ranked Wins:', player.stats.skywars.ranked.wins, true)
                    .addField('Ranked KD Ratio:', player.stats.skywars.ranked.KDRatio, true)
                    .addField('Ranked WL Ratio:', player.stats.skywars.ranked.WLRatio, true)

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