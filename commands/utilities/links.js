const Discord = require('discord.js')
const { base } = require('../../utils/embed');
module.exports = {
    name: 'links',
    aliases: [ 'invite', 'discord' ],
    description: 'will send you links related to HyDiscord',
    usage: '`h!links`',
    example: '`h!links`',
    async execute(message, args){
        await message.channel.sendTyping()
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Links', 'https://i.imgur.com/OuoECfX.jpeg')
            .setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
            .addField('Invite Link', 'https://hydiscord.github.io/invite')
            .addField('Website', 'https://hydiscord.github.io')
            .addField('Discord Server', 'https://hydiscord.github.io/discord')
            .addField('Vote', 'https://hydiscord.github.io/vote')
            .addField('Forums Post', 'https://hydiscord.github.io/forums')
            .addField('GitHub', 'https://hydiscord.github.io/github')
         message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}