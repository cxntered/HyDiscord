const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'ping',
    description: 'will send the bot\'s latency and the API latency',
    usage: '`h!ping`',
    example: '`h!ping`',
    async execute(message, args, bot){
      await message.channel.sendTyping()
        const embed = new Discord.MessageEmbed(base)
          .setAuthor('Ping', 'https://i.imgur.com/OuoECfX.jpeg')
          .setDescription(`🏓 \`Bot Latency: ${Date.now() - message.createdTimestamp} ms\` \n 🏓 \`API Latency: ${bot.ws.ping} ms\``)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
  }
}