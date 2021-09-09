const Discord = require('discord.js');
const mongoose = require('mongoose');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');
module.exports = {
    name: 'bedwars',
    aliases: [ "bw", "b" ],
    description: 'will show you the BedWars stats of a player',
    usage: '`h!bedwars [IGN]`',
    example: '`h!bedwars cxntered`',
    async execute(message, args) {
            await message.channel.sendTyping()
            const data = await User.findOne({
                id: message.author.id
            });

            if (!args[0] && !data) { // if someone didn't type in ign and wasn't verified
                const ign404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!bedwars cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
                return message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } })
            }

            if (data && !args[0]) {
                var player = data.uuid;
            } else if (args[0]) {
                var player = args[0];
            }

            hypixel.getPlayer(player).then((player) => {
                const embed = new Discord.MessageEmbed(base)
                    .setAuthor('BedWars Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/BedWars-64.png')
                    .setTitle(`[${player.rank}] ${player.nickname}`)
                    .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                    .addField('Level', `\`${player.stats.bedwars.level}✫\``, true)
                    .addField('Coins', `\`${commaNumber(player.stats.bedwars.coins)}\``, true)
                    .addField('Winstreak', `\`${commaNumber(player.stats.bedwars.winstreak)}\``, true)
                    .addField('Wins', `\`${commaNumber(player.stats.bedwars.wins)}\``, true)
                    .addField('Losses', `\`${commaNumber(player.stats.bedwars.losses)}\``, true)
                    .addField('WLR', `\`${player.stats.bedwars.WLRatio}\``, true)
                    .addField('Kills', `\`${commaNumber(player.stats.bedwars.kills)}\``, true)
                    .addField('Deaths', `\`${commaNumber(player.stats.bedwars.deaths)}\``, true)
                    .addField('KDR', `\`${player.stats.bedwars.KDRatio}\``, true)
                    .addField('Final Kills', `\`${commaNumber(player.stats.bedwars.finalKills)}\``, true)
                    .addField('Final Deaths', `\`${commaNumber(player.stats.bedwars.finalDeaths)}\``, true)
                    .addField('FKDR', `\`${player.stats.bedwars.finalKDRatio}\``, true)
                    .addField('Beds Broken', `\`${commaNumber(player.stats.bedwars.beds.broken)}\``, true)
                    .addField('Beds Lost', `\`${commaNumber(player.stats.bedwars.beds.lost)}\``, true)
                    .addField('BBLR', `\`${player.stats.bedwars.beds.BLRatio}\``, true)
                    .addField('Total Iron', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.iron)}\``, true)
                    .addField('Total Gold', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.gold)}\``, true)
                    .addField('Total Diamonds', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.diamond)}\``, true)
                    .addField('Total Emeralds', `\`${commaNumber(player.stats.bedwars.collectedItemsTotal.emerald)}\``, true)
                    .addField('Finals/Game', `\`${commaNumber(player.stats.bedwars.avg.finalKills)}\``, true)
                    .addField('Beds/Game', `\`${commaNumber(player.stats.bedwars.avg.bedsBroken)}\``, true)
                    .addField(`Wins to ${commaNumber(Math.ceil(player.stats.bedwars.WLRatio))} WLR`, `\`${commaNumber((player.stats.bedwars.losses*Math.ceil(player.stats.bedwars.WLRatio))-player.stats.bedwars.wins)}\``, true)
                    .addField(`Finals to ${commaNumber(Math.ceil(player.stats.bedwars.finalKDRatio))} FKDR`, `\`${commaNumber((player.stats.bedwars.finalDeaths*Math.ceil(player.stats.bedwars.finalKDRatio))-player.stats.bedwars.finalKills)}\``, true)
                    .addField(`Beds to ${commaNumber(Math.ceil(player.stats.bedwars.beds.BLRatio))} BBLR`, `\`${commaNumber((player.stats.bedwars.beds.lost*Math.ceil(player.stats.bedwars.beds.BLRatio))-player.stats.bedwars.beds.broken)}\``, true)

                message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
            }).catch(e => { // error messages
                if (e.message === errors.PLAYER_DOES_NOT_EXIST) {
                    const player404 = new Discord.MessageEmbed(base)
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription('I could not find that player in the API. Check spelling and name history.')
                    message.reply({ embeds: [player404], allowedMentions: { repliedUser: false } })
                } else if (e.message === errors.PLAYER_HAS_NEVER_LOGGED) {
                    const neverLogged = new Discord.MessageEmbed(base)
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription('That player has never logged into Hypixel.')
                    message.reply({ embeds: [neverLogged], allowedMentions: { repliedUser: false } })
                } else {
                    const error = new Discord.MessageEmbed(base)
                        .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                        .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!links`')
                    message.reply({ embeds: [error], allowedMentions: { repliedUser: false } })
                }       
        });
    }
}