const Discord = require('discord.js');
const { base } = require('../../utils/embed');
const { hypixel, errors } = require('../../utils/hypixel');
const commaNumber = require('comma-number');
const User = require('../../utils/user');

module.exports = {
    name: 'watchdog',
    aliases: [ "wdr" ],
    description: 'will show you Watchdog stats',
    usage: '`h!watchdog`',
    example: '`h!watchdog`',
    async execute(message, args) {
        await message.channel.sendTyping()
        hypixel.getWatchdogStats().then((stats) => {
            const embed = new Discord.MessageEmbed(base)
                .setAuthor('Watchdog Stats', 'https://i.imgur.com/tRe29vU.jpeg')
                .addField('Total Watchdog bans', `\`${commaNumber(stats.byWatchdogTotal)}\``, true)
                .addField('Bans in the last minute', `\`${commaNumber(stats.byWatchDogLastMinute)}\``, true)
                .addField('Total staff bans', `\`${commaNumber(stats.byStaffTotal)}\``, true)
            message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
        });
    }
}
