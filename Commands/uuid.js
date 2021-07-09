const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require ('../Storages/embed.json')
module.exports = {
    name: 'uuid',
    async execute(message, args){
        try {
        if(!args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!uuid cxntered`)')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            return message.channel.send(ign404)
        }
        
        const playerUUID = await fetch(`https://playerdb.co/api/player/minecraft/${args[0]}`); // fetch uuid
        const playerUUIDData = await playerUUID.json();

        const embed = new Discord.MessageEmbed()
        .setAuthor('UUID', 'https://i.imgur.com/OuoECfX.jpeg')
        .addField('Username', `\`${playerUUIDData.data.player.username}\``)
        .addField('UUID', `\`${playerUUIDData.data.player.id}\``)
        .addField('Trimmed UUID', `\`${playerUUIDData.data.player.raw_id}\``)
        .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.data.player.id}?overlay&size=256`)
        .setColor(color)
        .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed)
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