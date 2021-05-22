const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    guildOnly: true,
    execute(message, args){
        const user = message.mentions.users.first();
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to do this!") // permission check
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.ban({reason: 'Did a no no :('}).then(() =>{ // bans member
                    message.channel.send(`Sucessfully banned ${user.tag}`) // ban message
                }).catch(err =>{
                    message.channel.send(`I was unable to ban ${user.tag}`) // error message
                    console.log(error);
                });
            } else{
                message.channel.send("That user isn't in the server!") // if user isn't in server
            } 
        } else {
            message.channel.send("You need to @ who you want to ban!"); // if someone didn't ping user
        }
    }
}