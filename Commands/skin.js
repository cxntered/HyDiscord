const Discord = require('discord.js');
const fetch = require('node-fetch')
const { color, footer } = require ('../Storages/embed.json')
module.exports = {
    name: 'skin',
    async execute(message, args){
        try {
        if(!args[0]) { // if someone didn't type in ign
            return message.channel.send('You need to type in a player\'s IGN! (Example: `h!skin cxntered`)')
        }
        
        const playerUUIDFetch = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`); // fetch uuid 
        const playerUUIDData = await playerUUIDFetch.json(); 

        const embed = new Discord.MessageEmbed()
            .setAuthor('Skin', 'https://i.imgur.com/OuoECfX.jpeg')
            .addField('Username', `\`${args[0]}\``)
            .addField('Apply Skin', `[Link](https://www.minecraft.net/en-us/profile/skin/remote?url=https://crafatar.com/skins/${playerUUIDData.id})`)
            .setThumbnail(`https://crafatar.com/skins/${playerUUIDData.id}`)
            .setImage(`https://visage.surgeplay.com/full/${playerUUIDData.id}.png`)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
        } catch {
            message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
        }
    }
}