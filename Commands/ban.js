const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    guildOnly: true,
    execute(message, args){
        const user = message.mentions.users.first();
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to do this!")
        if(user){
            const member = message.guild.member(user);
            if(member){
                member.ban({reason: 'Did a no no :('}).then(() =>{
                    message.channel.send(`Sucessfully banned ${user.tag}`)
                })
            } else{
                message.channel.send("That user isn't in the server!")
            } 
        } else {
            message.channel.send("You need to @ who you want to ban!");
        }
    }
}