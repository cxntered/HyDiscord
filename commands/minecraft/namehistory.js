const Discord = require('discord.js');
const fetch = require('node-fetch');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const User = require('../../utils/user');
module.exports = {
    name: 'namehistory',
    aliases: [ "nh", "names" ],
    description: 'will show you the name history of a player',
    usage: '`h!namehistory [IGN]`',
    example: '`h!namehistory cxntered`',
    async execute(message, args){
        try {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });

        if (!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!namehistory cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
            return message.reply({ embeds: [ign404] })
        }


        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }

        const user = await hypixel.getPlayer(player)
        
        const playerNameData = await fetch(`https://api.mojang.com/user/profiles/${user.uuid}/names`).then(res => res.json()) // fetch name history

        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Name History', 'https://i.imgur.com/OuoECfX.jpeg')
            .setTitle(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setThumbnail(`https://crafatar.com/avatars/${user.uuid}?overlay&size=256`)

        for(length in playerNameData) { // name dividers
            for(key in playerNameData[length]) {
                if(key == 'name' && playerNameData[length].changedToAt == undefined) {
                    embed.addField(playerNameData[length][key], '`Original Name`', true)
                }
            }
        }

        for(length in playerNameData) { 
            for(key in playerNameData[length]) {
                if(key == 'name') {
                    if(playerNameData[length].changedToAt == undefined) {
                        break;
                    } else {
                    embed.addField(playerNameData[length][key], `<t:${playerNameData[length].changedToAt / 1000}:R>`, true)
                    }
                }
            }
        }

        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
        } catch (error) {
            if (error.message === errors.PLAYER_DOES_NOT_EXIST) {
                const player404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that player in the API. Check spelling and name history.')
                message.reply({ embeds: [player404], allowedMentions: { repliedUser: false } })
            } else if (error.message === errors.PLAYER_HAS_NEVER_LOGGED) {
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
        }
    }
}