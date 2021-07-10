const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'megawalls',
    aliases: [ "mw", "mega" ],
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!megawalls cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setAuthor('Mega Walls Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/MegaWalls-64.png')
                .addField('Class:', `\`${commaNumber(player.stats.megawalls.selectedClass)}\``, true)
                .addField('Coins:', `\`${commaNumber(player.stats.megawalls.coins)}\``, true)
                .addField('Wins:', `\`${commaNumber(player.stats.megawalls.wins)}\``, true)
                .addField('Total Games:', `\`${commaNumber(player.stats.megawalls.playedGames)}\``, true)
                .addField('Kills:', `\`${commaNumber(player.stats.megawalls.kills)}\``, true)
                .addField('Final Kills:', `\`${commaNumber(player.stats.megawalls.finalKills)}\``, true)
                .addField('Losses:', `\`${commaNumber(player.stats.megawalls.losses)}\``, true)
                .addField('Deathes:', `\`${commaNumber(player.stats.megawalls.deaths)}\``, true)
                .addField('Final Deaths:', `\`${commaNumber(player.stats.megawalls.finalDeaths)}\``, true)
                .addField('Final Assists:', `\`${commaNumber(player.stats.megawalls.finalAssists)}\``, true)
                .addField('Wither Kills:', `\`${commaNumber(player.stats.megawalls.defenderKills)}\``, true)
                .addField('Wither Damage:', `\`${commaNumber(player.stats.megawalls.witherDamage)}\``, true)
                .addField('KD Ratio:', `\`${commaNumber(player.stats.megawalls.KDRatio)}\``, true)
                .addField('WL Ratio:', `\`${commaNumber(player.stats.megawalls.WLRatio)}\``, true)

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