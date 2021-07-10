const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'tntgames',
    aliases: [ "tnt" ],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!tntgames cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            if (player.stats.tntgames.wizards.class == null) {
                wizardsClass = 'None'
            }
            const embed = new Discord.MessageEmbed()
                .setAuthor('TNT Games Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/TNT-64.png')
                .addField('Coins:', `\`${commaNumber(player.stats.tntgames.coins)}\``, true)
                .addField('Total Wins:', `\`${commaNumber(player.stats.tntgames.wins)}\``, true)
                .addField('Winstreak:', `\`${commaNumber(player.stats.tntgames.winstreak)}\``, true)
                .addField('TNT Run Wins:', `\`${commaNumber(player.stats.tntgames.tntrun.wins)}\``, true)
                .addField('TNT Run Deaths:', `\`${commaNumber(player.stats.tntgames.tntrun.deaths)}\``, true)
                .addField('TNT Run Longest Game (Minutes):', `\`${Math.floor(player.stats.tntgames.tntrun.record / 60)}\`:\`${player.stats.tntgames.tntrun.record - Math.floor(player.stats.tntgames.tntrun.record / 60) * 60}\``, true)
                .addField('PvP Run Wins:', `\`${commaNumber(player.stats.tntgames.pvprun.wins)}\``, true)
                .addField('PvP Run Deaths:', `\`${commaNumber(player.stats.tntgames.pvprun.deaths)}\``, true)
                .addField('PvP Run Longest Game (Minutes):', `\`${Math.floor(player.stats.tntgames.pvprun.record / 60)}\`:\`${player.stats.tntgames.pvprun.record - Math.floor(player.stats.tntgames.pvprun.record / 60) * 60}\``, true)
                .addField('PvP Run Kills:', `\`${commaNumber(player.stats.tntgames.pvprun.kills)}\``, true)
                .addField('PvP Run KD Ratio:', `\`${commaNumber(player.stats.tntgames.pvprun.KDRatio)}\``, true)
                .addField('PvP Run Wins:', `\`${commaNumber(player.stats.tntgames.pvprun.wins)}\``, true)
                .addField('TNT Tag Kills:', `\`${commaNumber(player.stats.tntgames.tnttag.kills)}\``, true)
                .addField('TNT Tag Wins:', `\`${commaNumber(player.stats.tntgames.tnttag.wins)}\``, true)
                .addField('TNT Tag Speed:', `\`${commaNumber(player.stats.tntgames.tnttag.speed)}\``, true)
                .addField('Bow Spleef Wins:', `\`${commaNumber(player.stats.tntgames.bowspleef.wins)}\``, true)
                .addField('Bow Spleef Tags:', `\`${commaNumber(player.stats.tntgames.bowspleef.tags)}\``, true)
                .addField('Bow Spleef Deaths:', `\`${commaNumber(player.stats.tntgames.bowspleef.deaths)}\``, true)
                .addField('Wizards Wins:', `\`${commaNumber(player.stats.tntgames.wizards.wins)}\``, true)
                .addField('Wizards Kills:', `\`${commaNumber(player.stats.tntgames.wizards.kills)}\``, true)
                .addField('Wizards Deaths:', `\`${commaNumber(player.stats.tntgames.wizards.deaths)}\``, true)
                .addField('Wizards Assists:', `\`${commaNumber(player.stats.tntgames.wizards.wins)}\``, true)
                .addField('Wizards KD Ratio:', `\`${commaNumber(player.stats.tntgames.wizards.KDRatio)}\``, true)
                .addField('Wizards Points:', `\`${commaNumber(player.stats.tntgames.wizards.points)}\``, true)
                .addField('Wizards Class:', `\`${wizardsClass}\``, true)

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