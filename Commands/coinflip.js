const Discord = require('discord.js');
module.exports = {
    name: 'coinflip',
    description: "Flips a coin." ,
    execute(message, args){
        function doRandHT() {
            var rand = ['It landed on Heads.','It landed on Tails.'];
            return rand[Math.floor(Math.random()*rand.length)];
            }
         message.channel.send(doRandHT())
    }
}