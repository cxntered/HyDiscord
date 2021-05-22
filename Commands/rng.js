const Discord = require('discord.js');
module.exports = {
    name: 'rng',
    aliases: [ "random" ],
    execute(message, args){
        var response = [Math.floor(Math.random() * (((args[1]) - 1) + 1) + 1)]; // rng
        if (!args[1])return message.channel.send('You didn\'t specify a lowest and highest number! (Example: `h!rng 1 10`)') // if someone doesn't type in 2 numbers
        if(isNaN(args[1]))return message.channel.send("That is not a number!") // if someone types something other than a number
        message.channel.send(`You got ${response}!`)
    }
}