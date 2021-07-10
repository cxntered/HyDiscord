const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'player',
    aliases: [ "p", "hypixel", "h" ],
    async execute(message, args) {
        if (!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!player cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(ign404)
        }
        hypixelAPIReborn.getPlayer(args[0], { guild: true }).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid
            const playerUUIDData = await playerUUID.json();

            playerIsOnline = "";

            if (!player.isOnline) {
                playerIsOnline = "Offline"
            }

            if (player.isOnline) {
                playerIsOnline = "Online"
            }

            playerMinecraftVersion = "";

            if (player.mcVersion == null) {
                playerMinecraftVersion = "Unknown";
            }

            if (player.mcVersion != null) {
                playerMinecraftVersion = player.mcVersion;
            }

            playerRank = "";

            if (player.rank == 'Default') {
                playerRank = "None";
            }

            if (player.rank != 'Default') {
                playerRank = player.rank;
            }

            const firstLDate = new Date(player.firstLogin); // fetch first login date and time
            const lastLDate = new Date(player.lastLogin); // fetch last login date and time

            const firstL = firstLDate.toLocaleString() // convert into cleaner date and time
            const lastL = lastLDate.toLocaleString() // convert into cleaner date and time

            const playerInfoEmbed = new Discord.MessageEmbed()
                .setAuthor('Player Stats', 'https://i.imgur.com/OuoECfX.jpeg')              
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.id}?overlay&size=256`)
                .addField('Rank:', `\`${playerRank}\``, true)
                .addField('Level:', `\`${player.level}\``, true)
                .addField('Karma:', `\`${commaNumber(player.karma)}\``, true)

            if (player.guild != null) {
                playerInfoEmbed.addField('Guild:', `\`${player.guild.name}\``)
            }

            if (player.guild != null && player.guild.tag != null) {
                playerInfoEmbed.setDescription(`[${player.rank}] ${player.nickname} [${player.guild.tag}]`)
                playerInfoEmbed.addField('Guild:', `${player.guild.name} [${player.guild.tag}]`)
            }
            
                playerInfoEmbed.addField('Main MC Version:', `\`${playerMinecraftVersion}\``, true)
                playerInfoEmbed.addField('First Login:', `\`${firstL}\``)
                playerInfoEmbed.addField('Last Login:', `\`${lastL}\``)
                playerInfoEmbed.addField('Status:', `\`${playerIsOnline}\``, true)

            if (player.rank.includes('MVP+')) {
                if (player.plusColor == null) {
                    playerInfoEmbed.addField('Plus Color:', '`Red`')
                } else {
                    playerInfoEmbed.addField('Plus Color:', `\`${player.plusColor}\``)
                }
            }

                playerInfoEmbed.addField('Social Media:', `Run \`h!socials ${player.nickname}\``)
                playerInfoEmbed.setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

            message.channel.send(playerInfoEmbed);
        }).catch(e => { // error messages
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                const player404 = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that player in the API. Check spelling and name history.')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                message.channel.send(player404)
            } else {
                if (args[0]) {
                    const error = new Discord.MessageEmbed()
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                    .setColor(color)
                    .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                    message.channel.send(error)
                }
            }       
        });
    }
}