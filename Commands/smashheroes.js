const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'smashheroes',
    aliases: [ "sh", "smash" ],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!smashheroes cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setAuthor('Smash Heroes Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/SmashHeroes-64.png')
                .addField('Level:', `\`${commaNumber(player.stats.smashheroes.level)}\``, true)
                .addField('Coins:', `\`${commaNumber(player.stats.smashheroes.coins)}\``, true)
                .addField('Wins:', `\`${commaNumber(player.stats.smashheroes.wins)}\``, true)
                .addField('Losses:', `\`${commaNumber(player.stats.smashheroes.losses)}\``, true)
                .addField('WL Ratio:', `\`${commaNumber(player.stats.smashheroes.WLRatio)}\``, true)
                .addField('Kills:', `\`${commaNumber(player.stats.smashheroes.kills)}\``, true)
                .addField('Deaths:', `\`${commaNumber(player.stats.smashheroes.deaths)}\``, true)
                .addField('KD Ratio:', `\`${commaNumber(player.stats.smashheroes.KDRatio)}\``, true)
                .addField('Winstreak:', `\`${commaNumber(player.stats.smashheroes.winstreak)}\``, true)
                .addField('Total Games:', `\`${commaNumber(player.stats.smashheroes.games)}\``, true)
                .addField('Total Quits:', `\`${commaNumber(player.stats.smashheroes.quits)}\``, true)

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