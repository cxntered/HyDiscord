const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');

module.exports = {
    name: 'speeduhc',
    aliases: ['suhc'],
    description: 'will show you the SpeedUHC stats of a player',
    usage: '`h!speeduhc [IGN]`',
    example: '`h!speeduhc cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!speeduhc cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404] })
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('SpeedUHC Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/SpeedUHC-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Kills', `\`${commaNumber(player.stats.speedUHC.kills)}\``, true)
                .addField('Losses', `\`${commaNumber(player.stats.speedUHC.losses)}\``, true)
                .addField('Wins', `\`${commaNumber(player.stats.speedUHC.wins)}\``, true)
                .addField('Winstreak', `\`${commaNumber(player.stats.speedUHC.winstreak)}\``, true)
                .addField('Deaths', `\`${commaNumber(player.stats.speedUHC.deaths)}\``, true)
                .addField('Games Played', `\`${commaNumber(player.stats.speedUHC.playedGames)}\``, true)
                .addField('Coins', `\`${commaNumber(player.stats.speedUHC.coins)}\``, true)
                .addField('KD Ratio', `\`${player.stats.speedUHC.KDRatio}\``, true)
                .addField('WL Ratio', `\`${player.stats.speedUHC.WLRatio}\``, true)

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