import { Client, Intents } from "discord.js";
import * as config from './config/config';
import * as commands from './commands';

const { DIRECT_MESSAGES, GUILD_MESSAGES, GUILDS } = Intents.FLAGS;
const client = new Client({
    intents: [DIRECT_MESSAGES, GUILD_MESSAGES, GUILDS],
    partials: ['CHANNEL', 'MESSAGE'],
});

client.once('ready', () => {
    console.log(`Logged in as ${ client.user.tag }`);
});

client.login( config.TOKEN );

export { client };