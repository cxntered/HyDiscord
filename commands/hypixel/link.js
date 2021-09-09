const Discord = require('discord.js');
const User = require('../../utils/user.js');
const { base } = require('../../utils/embed');;
const { hypixel, errors } = require('../../utils/hypixel');
module.exports = {
    name: 'link',
    aliases: [ 'verify' ],
    description: 'will allow you to link your Minecraft account to Discord',
    usage: '`h!link [IGN]`',
    example: '`h!link cxntered`',
    async execute(message, args){
      await message.channel.sendTyping()
        const user = await User.findOne({ id: message.author.id });
        if (user && user.uuid) {
          const alreadyconnected = new Discord.MessageEmbed(base)
            .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('Your account is already connected!')
          message.reply({ embeds: [alreadyconnected], allowedMentions: { repliedUser: false } })
        }
        if(!args[0]) {
          const ign404 = new Discord.MessageEmbed(base)
            .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('You need to type in a player\'s IGN! (Example: `h!link cxntered`)')
          message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } })
        }

        hypixel.getPlayer(args[0]).then(async (player) => {
            if (!player.socialMedia.find((s) => s.id === 'DISCORD')) {
              const notconnected = new Discord.MessageEmbed(base)
                  .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                  .setDescription('You haven\'t connected your Discord account to your account. Watch the GIF to learn how to connect your Discord account.')
                  .setImage('https://thumbs.gfycat.com/DentalTemptingLeonberger-size_restricted.gif')
              return message.reply({ embeds: [notconnected], allowedMentions: { repliedUser: false } })
            }
            if (player.socialMedia.find((s) => s.id === 'DISCORD').link !== message.author.tag) {
              const tagnomatch = new Discord.MessageEmbed(base)
                  .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                  .setDescription(`${player.nickname}'s connected Discord tag doesn't match your Discord tag.`)
              return message.reply({ embeds: [tagnomatch], allowedMentions: { repliedUser: false } })
            }
            const user1 = await User.findOne({ uuid: player.uuid });
            if (user1) {
              const playerdupe = new Discord.MessageEmbed(base)
                  .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                  .setDescription('That player has already been linked to another account.')
              return message.reply({ embeds: [playerdupe], allowedMentions: { repliedUser: false } })
            }
            new User({
                id: message.author.id,
                uuid: player.uuid
              }).save(() => {
                const linked = new Discord.MessageEmbed(base)
                  .setAuthor('Link', 'https://i.imgur.com/OuoECfX.jpeg')
                  .setDescription(`${player.nickname} has been successfully linked to your account.`)
                message.reply({ embeds: [linked], allowedMentions: { repliedUser: false } })
              });
            }).catch(e => { // error messages
              if (e.message === errors.PLAYER_DOES_NOT_EXIST) {
                  const player404 = new Discord.MessageEmbed(base)
                      .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                      .setDescription('I could not find that player in the API. Check spelling and name history.')
                  message.reply({ embeds: [player404], allowedMentions: { repliedUser: false } })
              } else if (e.message === errors.PLAYER_HAS_NEVER_LOGGED) {
                  const neverLogged = new Discord.MessageEmbed(base)
                      .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                      .setDescription('That player has never logged into Hypixel.')
                  message.reply({ embeds: [neverLogged], allowedMentions: { repliedUser: false } })
              } else {
                  if (args[0]) {
                      const error = new Discord.MessageEmbed(base)
                          .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                          .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!links`')
                      message.reply({ embeds: [error], allowedMentions: { repliedUser: false } })
                  }
              }       
          });
    }
}