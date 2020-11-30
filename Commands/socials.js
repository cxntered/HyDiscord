const Discord = require('discord.js');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'socials',
    execute(message, args) {
        hypixelAPIReborn.getPlayer(args[0]).then((player) => {
            let embed = new Discord.MessageEmbed()
                .setTitle('Social Media')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setFooter(footer)

            if (player.socialmedia[0] != undefined || player.socialmedia[0] != null) {
                embed.addField(player.socialmedia[0].name, player.socialmedia[0].link)
            }

            if (player.socialmedia[1] != undefined || player.socialmedia[1] != null) {
                embed.addField(player.socialmedia[1].name, player.socialmedia[1].link)
            }

            if (player.socialmedia[2] != undefined || player.socialmedia[2] != null) {
                embed.addField(player.socialmedia[2].name, player.socialmedia[2].link)
            }

            if (player.socialmedia[3] != undefined || player.socialmedia[3] != null) {
                embed.addField(player.socialmedia[3].name, player.socialmedia[3].link)
            }

            if (player.socialmedia[4] != undefined || player.socialmedia[4] != null) {
                embed.addField(player.socialmedia[4].name, player.socialmedia[4].link)
            }

            if (player.socialmedia[5] != undefined || player.socialmedia[5] != null) {
                embed.addField(player.socialmedia[5].name, player.socialmedia[5].link)
            }

            if (player.socialmedia[6] != undefined || player.socialmedia[6] != null) {
                embed.addField(player.socialmedia[6].name, player.socialmedia[6].link)
            }

            message.channel.send(embed)

        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                message.channel.send('I could not find that player in the API. Check spelling and name history.')
            } else {
                message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
            }       
        });
    }
}