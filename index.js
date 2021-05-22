const Discord = require('discord.js'); 
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./Storages/config.json');

bot.commands = new Discord.Collection(); // for command handler
const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('ready', () =>{ // sets status
	console.log(`Logged in as ${bot.user.tag}`)
	bot.user.setPresence({ 
		status: 'online',
		activity: {
			name: 'h!help | Made by cxntered',
			type: 'PLAYING',
		}
	})
})

setInterval(function presenceReset() { // resets status every 24 hours to prevent status from disappearing (could be bug with how i write my code)
	bot.user.setPresence({
		status: 'online',
		activity: {
			name: 'h!help | Made by cxntered',
			type: 'PLAYING',
		}
	})
}, 86400000)

bot.on('guildCreate', guild => { // invite message
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("**Thank you for adding me!** \n`-` My prefix is `h!` \n`-` You can see all commands by typing `h!help` \n`-` Join the HyDiscord server! `h!invite`")
})

bot.on('message', message => { // command handler
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	try {
		command.execute(message, args, bot);
	} catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command!');
	}
});

bot.login(token);
