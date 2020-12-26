const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'player',
    async execute(message, args) {
        hypixelAPIReborn.getPlayer(args[0], { guild: true }).then(async (player) => {
            const playerUUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
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

            const firstLDate = new Date(player.firstLogin);
            const lastLDate = new Date(player.lastLogin);

            const firstL = firstLDate.toLocaleString()
            const lastL = lastLDate.toLocaleString()

            const playerInfoEmbed = new Discord.MessageEmbed()
                .setTitle('Player Stats')
                .setDescription(`[${player.rank}] ${player.nickname}`)
                .setColor(color)
                .setThumbnail(`https://visage.surgeplay.com/face/256/${playerUUIDData.id}.png`)
                .addField('Rank:', playerRank, true)
                .addField('Level:', player.level, true)
                .addField('Karma:', commaNumber(player.karma), true)

            if (player.guild != null) {
                playerInfoEmbed.addField('Guild:', player.guild.name)
            }
            
                playerInfoEmbed.addField('Main MC Version:', playerMinecraftVersion, true)
                playerInfoEmbed.addField('First Login:', (firstL))
                playerInfoEmbed.addField('Last Login:', (lastL))
                playerInfoEmbed.addField('Status:', playerIsOnline, true)

            if (player.rank.includes('MVP+')) {
                playerInfoEmbed.addField('Plus Color:', player.plusColor.toString())
            }

                playerInfoEmbed.addField('Social Media:', `Run \`h!socials ${player.nickname}\``)
                playerInfoEmbed.setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

            message.channel.send(playerInfoEmbed);
        }).catch(e => {
            if (e.message === HypixelAPIReborn.Errors.PLAYER_DOES_NOT_EXIST) {
                message.channel.send('I could not find that player in the API. Check spelling and name history.')
            } else {
                message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
            }       
        });
    }
}