const Discord = require('discord.js');
const fetch = require('node-fetch');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'server',
    async execute(message, args){
        try {
        const MOTDFetch = await fetch(`https://api.mcsrvstat.us/2/${args[0]}`);
        const MOTDData = await MOTDFetch.json();
        const serverFetch = await fetch(`https://mc-api.net/v3/server/ping/${args[0]}`)
        const serverData = await serverFetch.json();

        const embed = new Discord.MessageEmbed()
            .setAuthor('Server Info', 'https://i.imgur.com/OuoECfX.jpeg')
            .addField('Host Name', `\`${MOTDData.hostname}\``)
            .addField('IP Address', `\`${MOTDData.ip}\`:\`${MOTDData.port}\``)
            .addField('Version', `\`${serverData.version.name}\``)
            .addField('Online Players', `\`${serverData.players.online}\`/\`${serverData.players.max}\``)
            .setThumbnail(serverData.favicon)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')

            if (MOTDData.motd.clean[1] !== undefined) {
                const cleanMOTD = `\n ${MOTDData.motd.clean[1]}`
                embed.addField('Clean MOTD', `\`${MOTDData.motd.clean[0]}${cleanMOTD}\``)
            } else if (MOTDData.motd.clean[1] == undefined) {
                embed.addField('Clean MOTD', `\`${MOTDData.motd.clean[0]}\``)
            }

            if (MOTDData.motd.raw[1] !== undefined) {
                const rawMOTD = `\n ${MOTDData.motd.raw[1]}`
                embed.addField('Raw MOTD', `\`${MOTDData.motd.raw[0]}${rawMOTD}\``)
            } else if (MOTDData.motd.clean[1] == undefined) {
                embed.addField('Raw MOTD', `\`${MOTDData.motd.raw[0]}\``)
            }
        message.channel.send(embed)
        } catch {
            const error = new Discord.MessageEmbed()
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('An error has occurred. Check the IP address. If the error persists and you are certain that the IP is correct, please make a support ticket in the server. `h!invite`')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            message.channel.send(error)
        }

  }
}