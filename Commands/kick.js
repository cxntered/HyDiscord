const Discord = require('discord.js');
module.exports = {
    name: 'kick',
    guildOnly: true,
    execute(message, args){
        const user = message.mentions.users.first();
        if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to do this!") // permission check
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.kick('You were kicked.').then(() =>{ // kicks member
                    message.channel.send(`Sucessfully kicked ${user.tag}`); // kick message
                }).catch(err =>{ // error message
                    message.channel.send(`I was unable to kick ${user.tag}`)
                    console.log(error);
                });
            } else{
                message.channel.send("That user isn't in the server!") // if user isn't in server
            } 
        } else {
            message.channel.send("You need to @ who you want to kick!"); // if someone didn't ping user
        }
    }
}