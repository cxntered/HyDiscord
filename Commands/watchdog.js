const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const { apikey } = require('../Storages/config.json');
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client(apikey);
const commaNumber = require('comma-number');

module.exports = {
    name: 'watchdog',
    aliases: [ "wdr" ],
    execute(message, args) {
        hypixelAPIReborn.getWatchdogStats().then((stats) => {
            const watchdogStatsEmbed = new Discord.MessageEmbed()
                .setAuthor('Watchdog Stats', 'https://i.imgur.com/OuoECfX.jpeg')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('Total Watchdog bans:', commaNumber(stats.byWatchdogTotal), true)
                .addField('Bans in the last minute:', commaNumber(stats.byWatchDogLastMinute), true)
                .addField('Total staff bans', commaNumber(stats.byStaffTotal), true)

            message.channel.send(watchdogStatsEmbed);

        });

    }
}
