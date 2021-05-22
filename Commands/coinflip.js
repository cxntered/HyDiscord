const Discord = require('discord.js');
module.exports = {
    name: 'coinflip',
    description: "Flips a coin." ,
    execute(message, args){
        function doRandHT() {
            var rand = ['It landed on Heads.','It landed on Tails.']; // options for rng to choose from
            return rand[Math.floor(Math.random()*rand.length)]; // rng
            }
         message.channel.send(doRandHT()) // send heads or tails
    }
}