const Discord = require('discord.js')
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);

module.exports = {
    name: 'guild',
    async execute(message, args) {
        let guildName = args.join(' '); // for guilds with spaces in name
        if (!args[0]) { // if someone didn't type in guild name
            message.channel.send('You need to type in a guild\'s name! (Not guild tag, but guild name.) (Example: `h!guild Rebel`)')
        }
        hypixelAPIReborn.getGuild('name', guildName).then(async (guild) => {
            const createdAtDate = new Date(guild.createdAtTimestamp);
            const createdAt = createdAtDate.toLocaleString()

            const guildInfoEmbed = new Discord.MessageEmbed()
                .setTitle('Guild Stats')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('Level:', guild.level, true)
                .addField('Members:', Object.keys(guild.members).length, true)
                .addField('Date Created:', createdAt, true)

                if (guild.tag !== null) {
                    guildInfoEmbed.setDescription(`${guild.name} [${guild.tag}]`)
                } else {
                    guildInfoEmbed.setDescription(`${guild.name}`)
                }

            message.channel.send(guildInfoEmbed);
        }).catch(e => { // error messages
            if (e.message === HypixelAPIReborn.Errors.GUILD_DOES_NOT_EXIST) {
                message.channel.send('I could not find that guild in the API. Check spelling and name history.')
            } else {
                if (args[0]) {
                    message.channel.send('An error has occurred. If the error persists, please make a support ticket in the server. `h!invite`')
                }
            }       
        });
    }
}