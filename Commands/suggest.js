const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')

module.exports = {
    name: 'suggest',
    asliases: ['suggestion', 'suggestfeature'],
    async execute(message, args, bot) {

        if(!args.length) { // if someone didn't type in anything
            return message.channel.send('You need to suggest something!')
        }

        let suggestion = args.join(' '); // for suggestions with spaces

        let embed = new Discord.MessageEmbed()
            .setAuthor('New Suggestion', 'https://i.imgur.com/OuoECfX.jpeg')
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
            .addField('Suggester:', message.author.tag)
            .addField('Suggestion:', suggestion)

        const channel = bot.guilds.cache.find(g => g.id == 776730779128037376).channels.cache.find(c => c.id == 790867974662783006); // find HyDiscord server and find suggestions channel
        channel.send(embed); // send suggestion to channel
        message.channel.send('Your suggestion has been submitted!')
    }
}