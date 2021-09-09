const Discord = require('discord.js'); 
const bot = new Discord.Client({ intents: [
	 "GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING" 
], partials: [ "CHANNEL" ] });
const fs = require('fs');
const mongoose = require('mongoose');
const { base } = require('./utils/embed');

require('dotenv').config({ path: './utils/.env' })

mongoose.connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
	console.log('Connected to MongoDB')
});

bot.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands')
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        bot.commands.set(command.name, command);
    }
}

bot.on('ready', () =>{ // sets status
	console.log(`Logged in as ${bot.user.tag}`)
	bot.user.setActivity('for h!help | Made by cxntered', { type: 'WATCHING' })
})

bot.on('guildCreate', guild => { // invite message
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
	const embed = new Discord.MessageEmbed(base)
		.setAuthor('HyDiscord', 'https://i.imgur.com/OuoECfX.jpeg')
        .setDescription('**Thank you for adding me!** \n`•` My prefix is `h!` \n`•` You can see all commands by typing `h!help` \n`•` Try using a command, such as `h!bedwars cxntered` \n\n**Links** \n[HyDiscord Server](https://hydiscord.github.io/discord) \n[Website](https://hydiscord.github.io) \n[Vote](https://hydiscord.github.io/vote) \n[Forums Post](https://hydiscord.github.io/forums)')
		.setThumbnail('https://i.imgur.com/OuoECfX.jpeg')
    channel.send({ embeds: [embed] })
})

bot.on('messageCreate', message => { // command handler
	const mention = new RegExp(`^<@!${bot.user.id}>$|^<@${bot.user.id}>$`)
	if (message.content.match(mention)) {
		const botprefix = new Discord.MessageEmbed(base)
        	.setAuthor('HyDiscord', 'https://i.imgur.com/OuoECfX.jpeg')
        	.setDescription('My prefix is `h!`')
        return message.reply({ embeds: [botprefix], allowedMentions: { repliedUser: false } })
	}
	const prefixMention = new RegExp(`^<@!?${bot.user.id}> `);
	const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : process.env.prefix;

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = bot.commands.get(commandName)
		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type === 'DM') {
		const cmdguildonly = new Discord.MessageEmbed(base)
            .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('I can\'t execute that command inside DMs!')
        return message.reply({ embeds: [cmdguildonly], allowedMentions: { repliedUser: false } })
	}

	try {
		command.execute(message, args, bot);
	} catch (error) {
		console.error(error);
		const err = new Discord.MessageEmbed(base)
            .setAuthor('Error', 'https://i.imgur.com/OuoECfX.jpeg')
            .setDescription('There was an error trying to execute that command! If the error persists, please make a support ticket in the server. `h!links`')
        message.reply({ embeds: [err], allowedMentions: { repliedUser: false } })
	}
});

bot.login(process.env.token);
