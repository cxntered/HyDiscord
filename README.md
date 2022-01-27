# HyDiscord
HyDiscord is a bot that allows you to see Hypixel stats of many people and many things. With HyDiscord, you can see:
* BedWars stats of a player
* SkyWars stats of a player
* UHC and SpeedUHC stats of a player
* Duels stats of a player
* Blitz Survival Games stats of a player
* Build Battle stats of a player
* Cops and Crims stats of a player
* Crazy Walls stats of a player
* Mega Walls stats of a player
* Murder Mystery stats of a player
* Smash Heroes stats of a player
* TNT Games stats of a player
* VampireZ stats of a player
* Name history of a player
* Social medias of a player
* Player stats
* Skin of a player
* UUID of a player
* Watchdog stats
* Guild stats
* and Server information

in this one Discord Bot!

## Commands
`[]` = Required `<>` = Optional
<details>
  <summary>Hypixel</summary>
  
  ### Hypixel
| **Command** | **Aliases** | **Description** | **Usage** | **Example** |
|:---:|:---:|:---:|:---:|:---:|
| h!player | h!p, h!hypixel, h!h | Shows general Hypixel stats of a player | h!player [IGN] | h!player cxntered |
| h!guild | h!g | Shows stats of a guild | h!guild [Guild] | h!guild Rebel |
| h!bedwars | h!bw, h!b | Shows BedWars stats of a player | h!bedwars [IGN] | h!bedwars cxntered |
| h!skywars | h!sw, h!s | Shows SkyWars stats of a player | h!skywars [IGN] | h!skywars cxntered |
| h!duels | h!d | Shows Duels stats of a player | h!duels [Mode] [IGN] | h!duels classic cxntered |
| h!link | h!verify | Allows you to link your Minecraft account to Discord | h!link [IGN] | h!link cxntered |
| h!unlink | h!unverify | Allows you to unlink your Minecraft account from your Discord | h!unlink | h!unlink |
| h!uhc |  | Shows UHC stats of a player | h!uhc [IGN] | h!uhc cxntered |
| h!speeduhc | h!suhc | Shows SpeedUHC stats of a player | h!speeduhc [IGN] | h!speeduhc cxntered |
| h!blitzsurvivalgames | h!bsg, h!blitz, h!survivalgames, h!sg | Shows Blitz Survival Games stats of a player | h!blitzsurvivalgames [IGN] | h!blitzsurvivalgames cxntered |
| h!buildbattle | h!bb, h!build | Shows Build Battle stats of a player | h!buildbattle [IGN] | h!buildbattle cxntered |
| h!copsandcrims | h!c&c, h!cac, h!cvc, h!cops, h!crims | Shows Cops and Crims stats of a player | h!copsandcrims [IGN] | h!copsandcrims cxntered |
| h!crazywalls | h!cw | Shows Crazy Walls stats of a player | h!crazywalls [IGN] | h!crazywalls cxntered |
| h!megawalls | h!mw | Shows Mega Walls stats of a player | h!megawalls [IGN] | h!megawalls cxntered |
| h!murdermystery | h!mm, h!murder, h!mystery | Shows Murder Mystery stats of a player | h!murdermystery [IGN] | h!murdermystery cxntered |
| h!smashheroes | h!sh, h!smash | Shows Smash Heroes stats of a player | h!smashheroes [IGN] | h!smashheroes cxntered |
| h!tntgames | h!tnt | Shows all TNT Games stats of a player | h!tntgames [IGN] | h!tntgames cxntered |
| h!vampirez | h!vz, h!vampire, h!vampires, h!vampz | Shows VampireZ stats of a player | h!vampirez [IGN] | h!vampirez cxntered |
| h!watchdog | h!wdr | Shows general Watchdog stats | h!watchdog | h!watchdog |
| h!socials |  | Shows a player's social medias | h!socials [IGN] | h!socials cxntered |
</details>

<details>
  <summary>Minecraft</summary>
  
  ### Minecraft
| **Command** | **Aliases** | **Description** | **Usage** | **Example** |
|:---:|:---:|:---:|:---:|:---:|
| h!namehistory | h!nh, h!names | Shows name history of a player | h!namehistory [IGN] | h!namehistory cxntered |
| h!uuid |  | Shows player's UUID | h!uuid [IGN] | h!uuid cxntered |
| h!skin |  | Shows player's skin and lets you apply it | h!skin [IGN] | h!skin cxntered |
| h!server | h!ip | Shows information about server | h!server [IP] | h!server mc.hypixel.net |
</details>

<details>
  <summary>Utility</summary>
  
  ### Utility
| **Command** | **Aliases** | **Description** | **Usage** | **Example** |
|:---:|:---:|:---:|:---:|:---:|
| h!help | h!commands, h!commandlist | Shows you a list of commands, and gives you further information about those commands | h!help <Command> | h!help |
| h!info |  | Shows info about HyDiscord | h!info | h!info |
| h!members |  | Shows you the current member count of the server you're in | h!members | h!members |
| h!ping |  | Sends a little "Pong!" along with the time it took from when you sent the command to the message being sent | h!ping | h!ping |
| h!links | h!invite | Sends you links related to HyDiscord | h!links | h!links |
| h!vote |  | Sends you a link to vote for HyDiscord on Top.gg | h!vote | h!vote |
| h!clear | h!purge | Deletes as many messages as you specify (Up to 100, and messages older than 14 days can't be deleted) | h!clear [1-100] | h!clear 10 |
| h!ban |  | Bans a member you specify | h!ban [@User] | h!ban @cxntered |
| h!kick |  | Kicks a member you specify | h!kick [@User] | h!kick @cxntered |
| h!suggest | h!suggestion, h!suggestfeature | Lets you suggest a feature to be added to HyDiscord | h!suggest [Suggestion] | h!suggest Add verification! |
| h!coinflip | h!cf | Flips a coin | h!coinflip | h!coinflip |
| h!rng | h!random | Picks a random number between two numbers you choose | h!rng [Minimum] [Maximum]  | h!rng 1 10 |
</details>

## How was HyDiscord made?
HyDiscord was made using [node.js](https://nodejs.org), [discord.js](https://discord.js.org), [Hypixel-API-Reborn](https://www.npmjs.com/package/hypixel-api-reborn) and [node-fetch](https://www.npmjs.com/package/node-fetch).

## How do I run it myself?
<b>NOTE: Please do not simply change a few lines in the source code and call it your bot! Please credit HyDiscord/cxntered.</b>  
  
  1. Create a Discord Developer Application [here](https://discord.com/developers/applications)
  2. Create an application, then go to the Bot section and click "Add Bot"
  3. Copy the token and save it somewhere 
  
  <b>WARNING: DO <i>NOT</i> GIVE OUT YOUR TOKEN TO ANYONE, THEY WILL HAVE FULL ACCESS TO YOUR BOT</b>
  
  4. Download the latest release
  5. Download Node.js [here](https://nodejs.org) (Download the latest version)
  6. Set up MongoDB locally, (you might have to modify a bit of code since I coded it with MongoDB Atlas in mind) or, if you don't know how to do setup MongoDB you can follow the [MongoDB Atlas setup guide](https://github.com/HyDiscord/HyDiscord/blob/master/atlas.md)
  7. Navigate to the repository in a terminal. (most terminals use `cd` to change directory)
  8. Run `npm i` in the terminal.
  9. Open the project in a text editor. (such as VS Code or Notepad++)
  10. Add your token, your API Key and your URI to `.env` in the `utils` folder (you can get your API Key by logging onto `mc.hypixel.net` and running `/api new`)
  11. Run `node .` in a terminal.

HyDiscord should now be running.

## Support
If you have trouble with the bot, you can either open an issue on GitHub or join the HyDiscord server [here.](https://bit.ly/HyDiscordServer)

## License
Please refer to the project's [license.](https://github.com/HyDiscord/HyDiscord/blob/master/LICENSE)

## Note
HyDiscord is in no way affiliated with Hypixel Inc. or Hypixel Studios.
