const Discord = require('discord.js');
module.exports = {
    name: 'rng',
    aliases: [ "random" ],
    execute(message, args){
        var response = [Math.floor(Math.random() * (((args[1]) - 1) + 1) + 1)];
        if (!args[1])return message.channel.send('You did not specify a number!')
        if(isNaN(args[1]))return message.channel.send("That is not a number!")
        message.channel.send(`You got ${response}!`)
    }
}