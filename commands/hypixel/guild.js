const Discord = require('discord.js')
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
module.exports = {
    name: 'guild',
    aliases: [ "g" ],
    description: 'will show you the stats of a guild',
    usage: '`h!guild [Guild]`',
    example: '`h!guild Rebel`',
    async execute(message, args) {
        await message.channel.sendTyping()
        let guildName = args.join(' '); // for guilds with spaces in name
        if (!args[0]) { // if someone didn't type in guild name
            const guildArg404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to type in a guild\'s name! (Not guild tag, but guild name.) (Example: `h!guild Rebel`)')
            message.reply({ embeds: [guildArg404], allowedMentions: { repliedUser: false } })
        }
        
        hypixel.getGuild('name', guildName).then(async (guild) => {
            const guildInfoEmbed = new Discord.MessageEmbed(base)
                .setAuthor('Guild Stats', 'https://i.imgur.com/tRe29vU.jpeg')
                .addField('Description', guild.description)
                .addField('Level', `\`${guild.level}\``, true)
                .addField('Members', `\`${Object.keys(guild.members).length}/125\``, true)
                .addField('Date Created', `<t:${Math.ceil(guild.createdAtTimestamp / 1000)}:R>`, true)
                var arr = []
                for(i = 0; i < guild.expHistory.length; i++) {
                    var exp = `\`•\` ${guild.expHistory[i].day}: \`${commaNumber(JSON.stringify(guild.expHistory[i].exp))}\``
                    arr.push(exp)
                }
                guildInfoEmbed.addField('GEXP History', `${arr[0]}\n${arr[1]}\n${arr[2]}\n${arr[3]}\n${arr[4]}\n${arr[5]}\n${arr[6]}\n`)

                if (guild.tag !== null) {
                    guildInfoEmbed.setTitle(`${guild.name} [${guild.tag}]`)
                } else {
                    guildInfoEmbed.setTitle(`${guild.name}`)
                }

            message.reply({ embeds: [guildInfoEmbed], allowedMentions: { repliedUser: false } });
        }).catch(e => { // error messages
            if (e.message === errors.GUILD_DOES_NOT_EXIST) {
                const guild404 = new Discord.MessageEmbed(base)
                    .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                    .setDescription('I could not find that guild in the API. Check spelling and name history.')
                message.reply({ embeds: [guild404], allowedMentions: { repliedUser: false } })
            } else if (e.message === errors.PLAYER_HAS_NEVER_LOGGED) {
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
        });
    }
}