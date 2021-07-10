const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'speeduhc',
    aliases: ['suhc'],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!speeduhc cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setAuthor('SpeedUHC Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/SpeedUHC-64.png')
                .addField('Kills:', `\`${commaNumber(player.stats.speedUHC.kills)}\``, true)
                .addField('Losses:', `\`${commaNumber(player.stats.speedUHC.losses)}\``, true)
                .addField('Wins:', `\`${commaNumber(player.stats.speedUHC.wins)}\``, true)
                .addField('Winstreak:', `\`${commaNumber(player.stats.speedUHC.winstreak)}\``, true)
                .addField('Deaths:', `\`${commaNumber(player.stats.speedUHC.deaths)}\``, true)
                .addField('Games Played:', `\`${commaNumber(player.stats.speedUHC.playedGames)}\``, true)
                .addField('Coins:', `\`${commaNumber(player.stats.speedUHC.coins)}\``, true)
                .addField('KD Ratio:', `\`${player.stats.speedUHC.KDRatio}\``, true)
                .addField('WL Ratio:', `\`${player.stats.speedUHC.WLRatio}\``, true)

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