const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const User = require('../../utils/user');
module.exports = {
    name: 'skin',
    description: 'will show you the skin of a player',
    usage: '`h!skin [IGN]`',
    example: '`h!skin cxntered`',
    async execute(message, args){
        try {
        await message.channel.sendTyping()
        const data = await User.findOne({
            id: message.author.id
        });
    
        if(!data && !args[0]) { // if someone didn't type in ign
            const ign404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a player\'s IGN! (Example: `h!namehistory cxntered`)')
            return message.reply({ embeds: [ign404] })
        }
    
    
        if (data && !args[0]) {
            var player = data.uuid;
        } else if (args[0]) {
            var player = args[0];
        }
    
        const user = await hypixel.getPlayer(player)

        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Skin', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQne0t-5uaF_3jR5ewomb8M_XfWO0qds5Qi97Tzh0hZZS7JSVWIbNZKPscUOI1FEyplpjM&usqp=CAU')
            .addField('Username', `\`${user.nickname}\``)
            .addField('Apply Skin', `[Link](https://www.minecraft.net/en-us/profile/skin/remote?url=https://crafatar.com/skins/${user.uuid})`)
            .setImage(`http://photopass.appspot.com/3d.php?user=${player}&vr=-25&hr=35&hrh=0&vrll=0&vrrl=0&vrla=0&vrra=0&displayHair=true&headOnly=false&format=png&ratio=20&aa=true&layers=true}`)
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