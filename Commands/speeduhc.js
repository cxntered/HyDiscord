const Discord = require('discord.js');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');

const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'speeduhc',
    aliases: ['suhc'],
    execute(message, args) {
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setTitle(`SpeedUHC Stats`)
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer)
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/SpeedUHC-64.png')
                .addField('Kills:', player.stats.speedUHC.kills, true)
                .addField('Losses:', player.stats.speedUHC.losses, true)
                .addField('Wins:', player.stats.speedUHC.wins, true)
                .addField('Winstreak:', player.stats.speedUHC.winstreak, true)
                .addField('Deaths:', player.stats.speedUHC.deaths, true)
                .addField('Games Played:', player.stats.speedUHC.playedGames, true)
                .addField('Coins:', player.stats.speedUHC.coins, true)
                .addField('KD Ratio:', player.stats.speedUHC.KDRatio, true)
                .addField('WL Ratio:', player.stats.speedUHC.WLRatio, true)

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