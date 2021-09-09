const Discord = require('discord.js');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'coinflip',
    aliases: [ "cf" ],
    description: 'will flip a coin',
    usage: '`h!coinflip`',
    example: '`h!coinflip`',
    async execute(message, args){
        await message.channel.sendTyping()
        function doRandHT() {
            var rand = ['It landed on Heads.','It landed on Tails.']; // options for rng to choose from
            return rand[Math.floor(Math.random()*rand.length)]; // rng
        }
        const embed = new Discord.MessageEmbed(base)
            .setAuthor('Coinflip', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`${doRandHT()}`)
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } }) // send heads or tails
    }
}