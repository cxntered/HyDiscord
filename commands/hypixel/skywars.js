const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');
module.exports = {
    name: 'skywars',
    aliases: [ "sw", "s" ],
    description: 'will show you the SkyWars stats of a player',
    usage: '`h!skywars [IGN]`',
    example: '`h!skywars cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!skywars cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404] })
        }


        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('SkyWars Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/Skywars-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Level', `\`${player.stats.skywars.level}\``, true)
                .addField('Heads', `\`${commaNumber(player.stats.skywars.heads)}\``, true)
                .addField('KD Ratio', `\`${player.stats.skywars.KDRatio}\``, true)
                .addField('WL Ratio', `\`${player.stats.skywars.WLRatio}\``, true)
                .addField('Coins', `\`${commaNumber(player.stats.skywars.coins)}\``, true)
                .addField('Total Deaths', `\`${commaNumber(player.stats.skywars.deaths)}\``, true)
                .addField('Total Kills', `\`${commaNumber(player.stats.skywars.kills)}\``, true)
                .addField('Winstreak', `\`${commaNumber(player.stats.skywars.winstreak)}\``, true)
                .addField('Total Wins', `\`${commaNumber(player.stats.skywars.wins)}\``, true)
                .addField('Tokens', `\`${commaNumber(player.stats.skywars.tokens)}\``, true)
                .addField('Prestige', `\`${player.stats.skywars.prestige}\``, true)
                .addField('Souls', `\`${commaNumber(player.stats.skywars.souls)}\``, true)
                .addField('Ranked Kills', `\`${commaNumber(player.stats.skywars.ranked.kills)}\``, true)
                .addField('Ranked Losses', `\`${commaNumber(player.stats.skywars.ranked.losses)}\``, true)
                .addField('Ranked Games Played', `\`${commaNumber(player.stats.skywars.ranked.played)}\``, true)
                .addField('Ranked Wins', `\`${commaNumber(player.stats.skywars.ranked.wins)}\``, true)
                .addField('Ranked KD Ratio', `\`${player.stats.skywars.ranked.KDRatio}\``, true)
                .addField('Ranked WL Ratio', `\`${player.stats.skywars.ranked.WLRatio}\``, true)

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