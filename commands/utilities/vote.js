const Discord = require('discord.js')
const { base } = require('../../utils/embed');
module.exports = {
    name: 'vote',
    description: 'will send you a link to vote for HyDiscord on Top.gg',
    usage: '`h!vote`',
    example: '`h!vote`',
    async execute(message, args){
        await message.channel.sendTyping()
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Vote', 'https://i.imgur.com/OuoECfX.jpeg')
            .setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
            .addField('Vote for HyDiscord!', 'https://hydiscord.github.io/vote')
         message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}