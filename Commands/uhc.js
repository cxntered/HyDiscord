const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'uhc',
    execute(message, args) {
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            const embed = new Discord.MessageEmbed()
                .setTitle('UHC Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/UHC-64.png')
                .addField('Kills:', player.stats.uhc.kills, true)
                .addField('Level:', player.stats.uhc.starLevel, true)
                .addField('Wins:', player.stats.uhc.wins, true)
                .addField('Heads Eaten:', player.stats.uhc.headsEaten, true)
                .addField('Deaths', player.stats.uhc.deaths, true)
                .addField('Coins:', player.stats.uhc.coins, true)

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