const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');
module.exports = {
    name: 'buildbattle',
    aliases: [ "bb", "build" ],
    description: 'will show you the Build Battle stats of a player',
    usage: '`h!buildbattle [IGN]`',
    example: '`h!buildbattle cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!buildbattle cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } });
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then((player) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('Build Battle Stats', 'https://hypixel.net/styles/hypixel-v2/images/game-icons/BuildBattle-64.png')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)
                .addField('Coins', `\`${commaNumber(player.stats.buildbattle.coins)}\``, true)
                .addField('Total Wins', `\`${commaNumber(player.stats.buildbattle.winsTotal)}\``, true)
                .addField('Total Games', `\`${commaNumber(player.stats.buildbattle.playedGames)}\``, true)
                .addField('Total Votes', `\`${commaNumber(player.stats.buildbattle.totalVotes)}\``, true)
                .addField('Score', `\`${commaNumber(player.stats.buildbattle.score)}\``, true)
                .addField('Solo Wins', `\`${commaNumber(player.stats.buildbattle.wins.solo)}\``, true)
                .addField('Team Wins', `\`${commaNumber(player.stats.buildbattle.wins.team)}\``, true)
                .addField('Pro Wins', `\`${commaNumber(player.stats.buildbattle.wins.pro)}\``, true)
                .addField('Guess That Build Wins', `\`${commaNumber(player.stats.buildbattle.wins.gtb)}\``, true)

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