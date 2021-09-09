require('dotenv').config({ path: './.env' })
const HypixelAPIReborn = require('hypixel-api-reborn');
const hypixel = new HypixelAPIReborn.Client(process.env.apikey, { cache: true });
const errors = HypixelAPIReborn.Errors

module.exports.hypixel = hypixel;
module.exports.errors = errors;