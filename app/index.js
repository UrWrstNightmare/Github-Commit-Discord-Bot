import { Client, Intents } from "discord.js";
import * as config from './config/config.js';
import {fMsgHandler} from "./events/message.js";
import storage from "node-persist";

const { DIRECT_MESSAGES, GUILD_MESSAGES, GUILDS } = Intents.FLAGS;
const client = new Client({
    intents: [DIRECT_MESSAGES, GUILD_MESSAGES, GUILDS],
    partials: ['CHANNEL', 'MESSAGE'],
});

// Initialize DB
await storage.init();
const OUserDataTest = await storage.getItem('user-data');
console.log(OUserDataTest);

client.once('ready', () => {
    console.log(`Logged in as ${ client.user.tag }`);
});

client.login( config.TOKEN );

client.on('messageCreate', fMsgHandler );