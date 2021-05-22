const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'namehistory',
    description: "Shows the name history of a user." ,
    aliases: [ "nh", "name" ],
    async execute(message, args){
        if(!args[0]) { // if someone didn't type in ign
            return message.channel.send('You need to type in a player\'s IGN! (Example: `h!namehistory cxntered`)')
        }
        
        const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid 
        const playerUUIDData = await playerUUIDFetch.json(); 
        const playerNameHistory = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`); // fetch name history
        const playerNameData = await playerNameHistory.json();

        let embed = new Discord.MessageEmbed()
            .setTitle('Name History')
            .setDescription(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

        for(length in playerNameData) { // name dividers
            for(key in playerNameData[length]) {
                if(key == 'name') {
                    embed.addField('━━━━', playerNameData[length][key])
                }
            }
        }

        message.channel.send(embed); 
    }
}