const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');

module.exports = {
    name: 'tntgames',
    aliases: [ "tnt" ],
    description: 'will show you TNT Games stats of a player',
    usage: '`h!tntgames [IGN]`',
    example: '`h!tntgames cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!tntgames cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404] })
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            if (player.stats.tntgames.wizards.class == null) {
                wizardsClass = 'None'
            }
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('TNT Games Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/TNT-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Coins', `\`${commaNumber(player.stats.tntgames.coins)}\``, true)
                .addField('Total Wins', `\`${commaNumber(player.stats.tntgames.wins)}\``, true)
                .addField('Winstreak', `\`${commaNumber(player.stats.tntgames.winstreak)}\``, true)
                .addField('TNT Run Wins', `\`${commaNumber(player.stats.tntgames.tntrun.wins)}\``, true)
                .addField('TNT Run Deaths', `\`${commaNumber(player.stats.tntgames.tntrun.deaths)}\``, true)
                .addField('TNT Run Longest Game (Minutes)', `\`${Math.floor(player.stats.tntgames.tntrun.record / 60)}\`:\`${player.stats.tntgames.tntrun.record - Math.floor(player.stats.tntgames.tntrun.record / 60) * 60}\``, true)
                .addField('PvP Run Wins', `\`${commaNumber(player.stats.tntgames.pvprun.wins)}\``, true)
                .addField('PvP Run Deaths', `\`${commaNumber(player.stats.tntgames.pvprun.deaths)}\``, true)
                .addField('PvP Run Longest Game (Minutes)', `\`${Math.floor(player.stats.tntgames.pvprun.record / 60)}\`:\`${player.stats.tntgames.pvprun.record - Math.floor(player.stats.tntgames.pvprun.record / 60) * 60}\``, true)
                .addField('PvP Run Kills', `\`${commaNumber(player.stats.tntgames.pvprun.kills)}\``, true)
                .addField('PvP Run KD Ratio', `\`${commaNumber(player.stats.tntgames.pvprun.KDRatio)}\``, true)
                .addField('PvP Run Wins', `\`${commaNumber(player.stats.tntgames.pvprun.wins)}\``, true)
                .addField('TNT Tag Kills', `\`${commaNumber(player.stats.tntgames.tnttag.kills)}\``, true)
                .addField('TNT Tag Wins', `\`${commaNumber(player.stats.tntgames.tnttag.wins)}\``, true)
                .addField('TNT Tag Speed', `\`${commaNumber(player.stats.tntgames.tnttag.speed)}\``, true)
                .addField('Bow Spleef Wins', `\`${commaNumber(player.stats.tntgames.bowspleef.wins)}\``, true)
                .addField('Bow Spleef Tags', `\`${commaNumber(player.stats.tntgames.bowspleef.tags)}\``, true)
                .addField('Bow Spleef Deaths', `\`${commaNumber(player.stats.tntgames.bowspleef.deaths)}\``, true)
                .addField('Wizards Wins', `\`${commaNumber(player.stats.tntgames.wizards.wins)}\``, true)
                .addField('Wizards Kills', `\`${commaNumber(player.stats.tntgames.wizards.kills)}\``, true)
                .addField('Wizards Deaths', `\`${commaNumber(player.stats.tntgames.wizards.deaths)}\``, true)
                .addField('Wizards Assists', `\`${commaNumber(player.stats.tntgames.wizards.wins)}\``, true)
                .addField('Wizards KD Ratio', `\`${commaNumber(player.stats.tntgames.wizards.KDRatio)}\``, true)
                .addField('Wizards Points', `\`${commaNumber(player.stats.tntgames.wizards.points)}\``, true)
                .addField('Wizards Class', `\`${wizardsClass}\``, true)

            message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });

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