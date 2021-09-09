const Discord = require('discord.js');
const fetch = require('node-fetch');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const User = require('../../utils/user');
module.exports = {
    name: 'uuid',
    description: 'will show you the UUID of a player',
    usage: '`h!uuid [IGN]`',
    example: '`h!uuid cxntered`',
    async execute(message, args){
        try {
            await message.channel.sendTyping()
            const data = await User.findOne({
                id: message.author.id
            });
            
            if(!data && !args[0]) { // if someone didn't type in ign
                const ign404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('You need to type in a player\'s IGN! (Example: `h!uuid cxntered`) \nYou can also link your account to do commands without inputting an IGN. (Example: `h!link cxntered`)')
                return message.reply({ embeds: [ign404], allowedMentions: { repliedUser: false } });
            }
            
            if (data && !args[0]) {
                var player = data.uuid;
            } else if (args[0]) {
                var player = args[0];
            }
    
            const user = await hypixel.getPlayer(player)
    
            const playerUUIDData = await fetch(`https://playerdb.co/api/player/minecraft/${user.uuid}`).then(res => res.json()); // fetch uuid
    
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('UUID', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQne0t-5uaF_3jR5ewomb8M_XfWO0qds5Qi97Tzh0hZZS7JSVWIbNZKPscUOI1FEyplpjM&usqp=CAU')
                .setTitle(`${playerUUIDData.data.player.username}`)
                .addField('UUID', `\`${playerUUIDData.data.player.id}\``)
                .addField('Trimmed UUID', `\`${playerUUIDData.data.player.raw_id}\``)
                .setThumbnail(`https://crafatar.com/avatars/${playerUUIDData.data.player.id}?overlay&size=256`)
            message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        } catch (error) {
            if (error.message === errors.PLAYER_DOES_NOT_EXIST) {
                const player404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that player in the API. Check spelling and name history.')
                message.reply({ embeds: [player404], allowedMentions: { repliedUser: false } })
            } else if (error.message === errors.PLAYER_HAS_NEVER_LOGGED) {
                const neverLogged = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('That player has never logged into Hypixel.')
                message.reply({ embeds: [neverLogged], allowedMentions: { repliedUser: false } })
            } else {
                const error = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('An error has occurred. If the error persists, please make a support ticket in the server. `h!links`')
                message.reply({ embeds: [error], allowedMentions: { repliedUser: false } })
            }
        }
    }
}