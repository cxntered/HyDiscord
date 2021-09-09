const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'members',
    description: 'will show you the current member count of the server you are in',
    usage: '`h!members`',
    example: '`h!members`',
    guildOnly: true,
    async execute(message, args){
        await message.channel.sendTyping()
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Members', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`Total members: \`${message.guild.memberCount}\``)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}