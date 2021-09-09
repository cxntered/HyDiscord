const Discord = require('discord.js');
const fs = require('fs');
const { base } = require('../../utils/embed');
module.exports = {
    name: 'help',
    aliases: [ 'commands', 'commandlist' ],
    description: 'will show you a list of commands or information about a specific command',
    usage: '`h!help <Command>`',
    example: '`h!help`, `h!help bedwars`',
    async execute(message, args, bot){
        await message.channel.sendTyping()
        if (!args.length) {
            const general = new Discord.MessageEmbed(base)
                .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
                .addField('Hypixel 🎮', '`h!player` \n`h!guild` \n`h!bedwars` \n`h!skywars` \n`h!duels` \n`h!uhc` \n`h!speeduhc` \n`h!blitzsurvivalgames` \n`h!buildbattle` \n`h!copsandcrims` \n`h!crazywalls` \n`h!megawalls` \n`h!murdermystery` \n`h!smashheroes` \n`h!tntgames` \n`h!vampirez` \n`h!socials` \n`h!link` \n`h!unlink`', true)
                .addField('Utility 🛠', '`h!help` \n`h!info` \n`h!members` \n`h!ping` \n`h!links` \n`h!vote` \n`h!clear` \n`h!ban` \n`h!kick` \n`h!suggest` \n`h!coinflip` \n`h!rng`', true)
                .addField('Minecraft ⛏', '`h!namehistory` \n`h!uuid` \n`h!skin` \n`h!server`', true)
                general.setDescription('Do `h!help [command]` to see what that command does.')
            return message.reply({ embeds: [general], allowedMentions: { repliedUser: false } })
        }

        const command = bot.commands.get(args[0].toLowerCase()) || bot.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase()));

        if (!command) {
	        const command404 = new Discord.MessageEmbed(base)
                .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
                .setDescription('That isn\'t a valid command!')
            return message.reply({ embeds: [command404], allowedMentions: { repliedUser: false } })
        }

        const help = new Discord.MessageEmbed(base)
            .setAuthor('Help', 'https://i.imgur.com/OuoECfX.jpeg')
            .setTitle(`h!${command.name}`)
            .addField('Description', `\`h!${command.name}\` ${command.description}`)
            if (command.aliases) help.addField('Aliases', `\`h!${command.aliases.join('`, `h!')}\``)
            help.addField('Usage', command.usage)
            help.addField('Example', command.example)
        message.reply({ embeds: [help], allowedMentions: { repliedUser: false } })
    }
}