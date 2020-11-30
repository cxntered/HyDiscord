const Discord = require('discord.js');
const fetch = require('node-fetch');
var color = '0x738ADB';
var footer = 'HyDiscord - Made by cxntered';
module.exports = {
    name: 'namehistory',
    description: "Shows the name history of a user." ,
    aliases: [ "nh", "name" ],
    async execute(message, args){
        if(!args[0]) {
            return message.channel.send('You need to specify a player!')
        }
        
        const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
        const playerUUIDData = await playerUUIDFetch.json();
        const playerNameHistory = await fetch(`https://api.mojang.com/user/profiles/${playerUUIDData.id}/names`);
        const playerNameData = await playerNameHistory.json();

        let embed = new Discord.MessageEmbed()
            .setTitle('Name History')
            .setDescription(`${playerNameData[playerNameData.length - 1].name}'s Name History`)
            .setColor(color)
            .setFooter(footer)

        for(length in playerNameData) {
            for(key in playerNameData[length]) {
                if(key == 'name') {
                    embed.addField('━━━━', playerNameData[length][key])
                }
            }
        }

        message.channel.send(embed); 
    }
}