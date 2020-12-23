const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')

module.exports = {
    name: 'suggest',
    asliases: ['suggestion', 'suggestfeature'],
    async execute(message, args, bot) {

        if(!args.length) {
            return message.channel.send('You need to suggest something!')
        }

        let suggestion = args.join(' ');

        let embed = new Discord.MessageEmbed()
            .setTitle('New Suggestion')
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            .addField('Suggester:', message.author.tag)
            .addField('Suggestion:', suggestion)

        const channel = bot.guilds.cache.find(g => g.id == 776730779128037376).channels.cache.find(c => c.id == 790867974662783006);
        channel.send(embed);
        message.channel.send('Your suggestion has been submitted!')
    }
}