const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'suggest',
    asliases: ['suggestion', 'suggestfeature'],
    description: 'will let you suggest a feature to be added to HyDiscord',
    usage: '`h!suggest [Suggestion]`',
    example: '`h!suggest Add more gamemodes!`',
    async execute(message, args, bot) {
        await message.channel.sendTyping()

        if(!args.length) { // if someone didn't type in anything
            const nosuggestion = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You need to suggest something!')
            return message.reply({ embeds: [nosuggestion], allowedMentions: { repliedUser: false } })
        }

        let suggestion = args.join(' '); // for suggestions with spaces

        let suggestionEmbed = new Discord.MessageEmbed(base)
            .setAuthor('New Suggestion', 'https://i.imgur.com/OuoECfX.jpeg')
            .addField('Suggester', message.author.tag)
            .addField('Suggestion', suggestion)

        const channel = bot.guilds.cache.find(g => g.id == 776730779128037376).channels.cache.find(c => c.id == 790867974662783006); // find HyDiscord server and find suggestions channel
        channel.send({ embeds: [suggestionEmbed] }); // send suggestion to channel
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Suggestion', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('Your suggestion has been submitted!')
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}