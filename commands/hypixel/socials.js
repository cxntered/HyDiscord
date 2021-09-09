const Discord = require('discord.js');
const fetch = require('node-fetch');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const User = require('../../utils/user');

module.exports = {
    name: 'socials',
    description: 'will show you the social medias of a player',
    usage: '`h!socials [IGN]`',
    example: '`h!socials cxntered`',
    async execute(message, args) {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!socials cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404] })
        }

        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        hypixel.getPlayer(player).then(async (player) => {

            let embed = new Discord.MessageEmbed(base)
                .setAuthor('Social Media', 'https://i.imgur.com/tRe29vU.jpeg')
                .setTitle(`[${player.rank}] ${player.nickname}`)
                .setThumbnail(`https://crafatar.com/avatars/${player.uuid}?overlay&size=256`)

            if (player.socialMedia[0] != undefined || player.socialMedia[0] != null) {
                embed.addField(player.socialMedia[0].name, player.socialMedia[0].link)
            }

            if (player.socialMedia[1] != undefined || player.socialMedia[1] != null) {
                embed.addField(player.socialMedia[1].name, player.socialMedia[1].link)
            }

            if (player.socialMedia[2] != undefined || player.socialMedia[2] != null) {
                embed.addField(player.socialMedia[2].name, player.socialMedia[2].link)
            }

            if (player.socialMedia[3] != undefined || player.socialMedia[3] != null) {
                embed.addField(player.socialMedia[3].name, player.socialMedia[3].link)
            }

            if (player.socialMedia[4] != undefined || player.socialMedia[4] != null) {
                embed.addField(player.socialMedia[4].name, player.socialMedia[4].link)
            }

            if (player.socialMedia[5] != undefined || player.socialMedia[5] != null) {
                embed.addField(player.socialMedia[5].name, player.socialMedia[5].link)
            }

            if (player.socialMedia[6] != undefined || player.socialMedia[6] != null) {
                embed.addField(player.socialMedia[6].name, player.socialMedia[6].link)
            }

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