const Discord = require('discord.js');
const fs = require('fs')
const prettyms = require('pretty-ms');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'info',
    description: 'will show you info about HyDiscord',
    usage: '`h!info`',
    example: '`h!info`',
    async execute(message, args, bot){
        await message.channel.sendTyping()
        const commands = fs.readdirSync('./commands/hypixel').length + fs.readdirSync('./commands/minecraft').length + fs.readdirSync('./commands/utilities').length
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Info', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('HyDiscord is a bot made for the Hypixel Network, allowing you to track players\' stats on different Hypixel gamemodes and a lot more.')
            .addField('Made By', ':desktop: `cxntered#8012`', true)
            .addField('Uptime', `:alarm_clock: \`${prettyms(bot.uptime)}\``, true)
            .addField('Commands', `:joystick: \`${commands}\``, true)
            .addField('Servers', `:homes: \`${bot.guilds.cache.size}\``, true)
            .addField('Users', `:busts_in_silhouette: \`${message.client.guilds.cache.map((g) => g.memberCount).reduce((a, c) => a + c)}\``, true)
            .addField('Channels', `:hash: \`${bot.channels.cache.filter((c) => c.type !== 'category').size}\``, true)
            .addField('Made With', '<:nodejs:869501761499566110> Node.js \n<:djs:869501761377939516> Discord.js \n<:hypixel:869501764657872896> Hypixel-API-Reborn \n<:nodefetch:869501760908197918> Node-Fetch')
            .addField('Links', '[Invite](https://hydiscord.github.io/invite) \n[HyDiscord Server](https://hydiscord.github.io/discord) \n[GitHub](https://hydiscord.github.io/github)')
            .setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}