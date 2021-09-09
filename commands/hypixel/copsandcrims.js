const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');
module.exports = {
    name: 'copsandcrims',
    aliases: [ "c&c", "cac", "cvc", "cops", "crims" ],
    description: 'will show you the Cops and Crims stats of a player ',
    usage: '`h!copsandcrims [IGN]`',
    example: '`h!copsandcrims cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!copsandcrims cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } });
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('Cops and Crims Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/CVC-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Coins', `\`${commaNumber(player.stats.copsandcrims.coins)}\``, true)
                .addField('Wins', `\`${commaNumber(player.stats.copsandcrims.wins)}\``, true)
                .addField('Round Wins', `\`${commaNumber(player.stats.copsandcrims.roundWins)}\``, true)
                .addField('Kills', `\`${commaNumber(player.stats.copsandcrims.kills)}\``, true)
                .addField('Criminal Kills', `\`${commaNumber(player.stats.copsandcrims.killsAsCrim)}\``, true)
                .addField('Cop Kills', `\`${commaNumber(player.stats.copsandcrims.killsAsCop)}\``, true)
                .addField('Deathes', `\`${commaNumber(player.stats.copsandcrims.deaths)}\``, true)
                .addField('Deathmatch Kills', `\`${commaNumber(player.stats.copsandcrims.deathmatch.kills )}\``, true)
                .addField('Headshot Kills', `\`${commaNumber(player.stats.copsandcrims.headshotKills)}\``, true)
                .addField('Bombs Defused', `\`${commaNumber(player.stats.copsandcrims.bombsDefused)}\``, true)
                .addField('Bombs Planted', `\`${commaNumber(player.stats.copsandcrims.bombsPlanted)}\``, true)
                .addField('KD Ratio', `\`${commaNumber(player.stats.copsandcrims.KDRatio)}\``, true)

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