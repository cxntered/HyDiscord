const Discord = require('discord.js');
const { color, footer } = require('../Storages/embed.json')
module.exports = {
    name: 'coinflip',
    aliases: [ "cf" ],
    execute(message, args){
        function doRandHT() {
            var rand = ['It landed on Heads.','It landed on Tails.']; // options for rng to choose from
            return rand[Math.floor(Math.random()*rand.length)]; // rng
        }
        const embed = new Discord.MessageEmbed()
            .setAuthor('Coinflip', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription(`${doRandHT()}`)
            .setColor(color)
            .setFooter(footer, 'https://i.imgur.com/OuoECfX.jpeg')
        message.channel.send(embed) // send heads or tails
    }
}