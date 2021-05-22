const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number')

module.exports = {
    name: 'uhc',
    execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            message.channel.send('You need to type in a player\'s IGN! (Example: `h!uhc cxntered`)')
        }
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setTitle('UHC Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/UHC-64.png')
                .addField('Kills:', commaNumber(player.stats.uhc.kills), true)
                .addField('Level:', player.stats.uhc.starLevel, true)
                .addField('Wins:', commaNumber(player.stats.uhc.wins), true)
                .addField('Heads Eaten:', commaNumber(player.stats.uhc.headsEaten), true)
                .addField('Deaths', commaNumber(player.stats.uhc.deaths), true)
                .addField('Coins:', commaNumber(player.stats.uhc.coins), true)

            message.channel.send(embed);

        }).catch(e => { // error messages
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                message.channel.send('I could not find that player in the API. Check spelling and name history.')
            } else {
                if (args[0]) {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }
            }       
        });
    }
}