const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');
module.exports = {
    name: 'crazywalls',
    aliases: [ "cw" ],
    description: 'will show you the Crazy Walls stats of a player',
    usage: '`h!crazywalls [IGN]`',
    example: '`h!crazywalls cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!crazywalls cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } });
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('Crazy Walls Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/CrazyWalls-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Coins', `\`${commaNumber(player.stats.crazywalls.coins)}\``, true)
                .addField('Wins', `\`${commaNumber(player.stats.crazywalls.wins)}\``, true)
                .addField('Kills', `\`${commaNumber(player.stats.crazywalls.kills)}\``, true)
                .addField('Deaths', `\`${commaNumber(player.stats.crazywalls.deaths)}\``, true)
                .addField('Winstreak', `\`${commaNumber(player.stats.crazywalls.winstreak)}\``, true)
                .addField('Losses', `\`${commaNumber(player.stats.crazywalls.losses)}\``, true)
                .addField('KD Ratio', `\`${commaNumber(player.stats.crazywalls.KDRatio)}\``, true)
                .addField('WL Ratio', `\`${commaNumber(player.stats.crazywalls.WLRatio)}\``, true)

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