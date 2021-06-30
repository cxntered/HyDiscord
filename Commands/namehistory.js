const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'namehistory',
    description: "Shows the name history of a user." ,
    aliases: [ "nh", "name" ],
    async execute(message, args){
        try {
        if(!args[0]) { // if someone didn't type in ign
            return message.channel.send('You need to type in a player\'s IGN! (Example: `h!namehistory cxntered`)')
        }
        
        const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid 
        const playerUUIDData = await playerUUIDFetch.json(); 
        const playerNameHistory = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`); // fetch name history
        const playerNameData = await playerNameHistory.json();

        const embed = new Discord.MessageEmbed()
            .setAuthor('Name History', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.id}?overlay&size=256`)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

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
                    const changedAtDate = new Date(playerNameData[length].changedToAt); // fetch first login date and time
                    const changedAt = changedAtDate.toLocaleString() // convert into cleaner date and time
                    embed.addField(playerNameData[length][key], `\`${changedAt}\``, true)
                    }
                }
            }
        }

        message.channel.send(embed); 
        } catch {
            const error = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('An error has occurred. Check spelling and name history. If the error persists and you are certain that the IGN is correct, please make a support ticket in the server. `h!invite`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(error)
        }
    }
}