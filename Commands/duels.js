const Discord = require('discord.js');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'duels',
    execute(message, args) {
        if(!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Help')
                .setColor(color)
                .addField('h!duels', '`h!duels` lets you see duels stats about a player.')
                .addField('Usage', '`h!duels uhc`\n`h!duels skywars`\n`h!duels bridge`\n`h!duels sumo`\n`h!duels op`\n`h!duels combo`')
                .setFooter(footer)
                .setImage('https://hypixel.net/styles/hypixel-v2/images/game-icons/Duels-64.png')

            message.channel.send(embed);

        }

        if (args[0] == 'classic') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Classic Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(colors['MainColor'])
                    .addField('Kills:', player.stats.duels.classic.v1.kills)
                    .addField('Losses:', player.stats.duels.classic.v1.losses)
                    .addField('Deaths:', player.stats.duels.classic.v1.deaths)
                    .addField('Wins:', player.stats.duels.classic.v1.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        } 

        if (args[0] == 'uhc') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('UHC Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(colors['MainColor'])
                    .addField('Kills:', player.stats.duels.uhc.v1.kills)
                    .addField('Losses:', player.stats.duels.uhc.v1.losses)
                    .addField('Deaths:', player.stats.duels.uhc.v1.deaths)
                    .addField('Wins:', player.stats.duels.uhc.v1.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        }

        if (args[0] == 'skywars' || args[0] == 'sw') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Skywars Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', player.stats.duels.skywars.v1.kills)
                    .addField('Losses:', player.stats.duels.skywars.v1.losses)
                    .addField('Deaths:', player.stats.duels.skywars.v1.deaths)
                    .addField('Wins:', player.stats.duels.skywars.v1.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        }

        if (args[0] == 'bridge') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('The Bridge Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', player.stats.duels.bridge.v1.kills)
                    .addField('Losses:', player.stats.duels.bridge.v1.losses)
                    .addField('Deaths:', player.stats.duels.bridge.v1.deaths)
                    .addField('Wins:', player.stats.duels.bridge.v1.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        }

        if (args[0] == 'sumo') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Sumo Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', player.stats.duels.sumo.kills)
                    .addField('Losses:', player.stats.duels.sumo.losses)
                    .addField('Deaths:', player.stats.duels.sumo.deaths)
                    .addField('Wins:', player.stats.duels.sumo.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        }

        if (args[0] == 'op') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('OP Duels Stats')
                    .setDescription(`[${player.rank}] ${player.nickname}`)
                    .setColor(color)
                    .addField('Kills:', player.stats.duels.op.v1.kills)
                    .addField('Losses:', player.stats.duels.op.v1.losses)
                    .addField('Deaths:', player.stats.duels.op.v1.deaths)
                    .addField('Wins:', player.stats.duels.op.v1.wins)
                    .setFooter(footer)

                message.channel.send(embed);

            }).catch(e => {
                if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                    message.channel.send('I could not find that player in the API. Check spelling and name history.')
                } else {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }       
            });
        }

        if (args[0] == 'combo') {
            hypixelAPIReborn.getPlayer(args[1]).then((player) => {
                const embed = new Discord.MessageEmbed()
                    .setTitle('Combo Duels Stats')
                    .setColor(color)
                    .addField('Kills:', player.stats.duels.combo.kills, true)
                    .addField('Losses:', player.stats.duels.combo.losses, true)
                    .addField('Deaths:', player.stats.duels.combo.deaths, true)
                    .addField('Wins:', player.stats.duels.combo.wins, true)
                    .setFooter(footer)

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
}