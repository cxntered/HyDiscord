const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'rng',
    aliases: [ "random" ],
    description: 'will generate a random number out of two numbers you specify',
    usage: '`h!rng [Min] [Max]`',
    example: '`h!rng 1 10`',
    async execute(message, args){
        await message.channel.sendTyping()
        var response = [Math.floor(Math.random() * (((args[1]) - 1) + 1) + 1)]; // rng
        if (!args[1]) {
            const nonumbers = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('You didn\'t specify a lowest and highest number! (Example: `h!rng 1 10`)')
            return message.reply({ embeds: [nonumbers], allowedMentions: { repliedUser: false } })
        }
        if(isNaN(args[1])) {
            const nan = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('That is not a number!')
            return message.reply({ embeds: [nan], allowedMentions: { repliedUser: false } })
        }
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('RNG', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`You got \`${response}\`!`)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } })
    }
}