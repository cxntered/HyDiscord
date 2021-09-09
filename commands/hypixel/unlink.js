const Discord = require('discord.js');
const fetch = require('node-fetch');
const User = require('../../utils/user.js');
const { base } = require('../../utils/embed');;
const { hypixel, errors } = require('../../utils/hypixel');
module.exports = {
    name: 'unlink',
    aliases: [ 'unverify' ],
    description: 'will allow you to unlink your Minecraft account from your Discord',
    usage: '`h!unlink`',
    example: '`h!unlink`',
    async execute(message, args){
      await message.channel.sendTyping()
        const user = await User.findOne({ id: message.author.id });
        if (!user) {
          const notconnected = new Discord.MessageEmbed(base)
            .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('Your account is not connected!')
          return message.reply({ embeds: [notconnected], allowedMentions: { repliedUser: false } })
        }

        const username = await fetch(`https://playerdb.co/api/player/minecraft/${user.uuid}`).then(res => res.json())

        user.deleteOne(() => {
          const unlinked = new Discord.MessageEmbed(base)
            .setAuthor('Unlink', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`${username.data.player.username} has been successfully unlinked from your account.`)
          message.reply({ embeds: [unlinked], allowedMentions: { repliedUser: false } })
        });
  }
}