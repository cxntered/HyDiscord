const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixelAPIReborn = new HypixelAPIReborn.Client('8b3c888e-e8cf-4786-a685-033fef4ed270');
const commaNumber = require('comma-number');

module.exports = {
    name: 'watchdog',
    aliases: [ "wdr" ],
    execute(message, args) {
        hypixelAPIReborn.getWatchdogStats().then((stats) => {
            const watchdogStatsEmbed = new Discord.MessageEmbed()
                .setTitle('Watchdog Stats')
                .setColor(color)
                .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('Total Watchdog bans:', commaNumber(stats.byWatchdogTotal), true)
                .addField('Bans in the last minute:', commaNumber(stats.byWatchDogLastMinute), true)
                .addField('Total staff bans', commaNumber(stats.byStaffTotal), true)

            message.channel.send(watchdogStatsEmbed);

        });

    }
}