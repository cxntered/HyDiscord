const Discord = require('discord.js');
const fetch = require('node-fetch');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'server',
    aliases: [ "ip" ],
    description: 'will show you info about a server',
    usage: '`h!server [IP]`',
    example: '`h!server mc.hypixel.net`',
    async execute(message, args){
        try {
        await message.channel.sendTyping()
        if(!args[0]) { // if someone didn't type in ip
        const ip404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a server IP! (Example: `h!server mc.hypixel.net`)')
        return message.reply({ embeds: [ip404], allowedMentions: { repliedUser: false } })
        }
        const MOTDData = await fetch(`https://api.mcsrvstat.us/2/${args[0]}`).then(res => res.json());
        const serverData = await fetch(`https://mc-api.net/v3/server/ping/${args[0]}`).then(res => res.json());

        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Server Info', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQne0t-5uaF_3jR5ewomb8M_XfWO0qds5Qi97Tzh0hZZS7JSVWIbNZKPscUOI1FEyplpjM&usqp=CAU')
            .setTitle(args[0])
            .addField('IP Address', `\`${MOTDData.ip}\`:\`${MOTDData.port}\``)
            .addField('Version', `\`${serverData.version.name}\``)
            .addField('Online Players', `\`${serverData.players.online}\`/\`${serverData.players.max}\``)
            .setThumbnail(serverData.favicon)

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
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        } catch {
            const error = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('An error has occurred. Check the IP address. If the error persists and you are certain that the IP is correct, please make a support ticket in the server. `h!links`')
            message.reply({ embeds: [error], allowedMentions: { repliedUser: false } })
        }

  }
}