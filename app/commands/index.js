import fCronAction from "./actions/cronAction.js";
import fHelpAction from "./actions/helpAction.js";

const PLACEHOLDER_ACTION = async (msg) => {
    await msg.reply('PLACEHOLDER');
}

const PREFIX = "/";

const COMMANDS = [
    { title: 'Info', text: 'info', desc: '', example: '', required_arg: 1, action: PLACEHOLDER_ACTION },
    { title: 'Help', text: 'help', desc: '', example: '', required_arg: 1, action: fHelpAction },
    { title: 'Check Commit Status', text: 'check-commit', desc: '', example: '', required_arg: 1, action: PLACEHOLDER_ACTION },
    { title: 'Register User', text: 'register', desc: '', example: '', required_arg: 3, action: PLACEHOLDER_ACTION },
    { title: 'Unregister User', text: 'unregister', desc: '', example: '', required_arg: 2, action: PLACEHOLDER_ACTION },
    { title: 'List Users', text: 'ls-user', desc: '', example: '', required_arg: 1, action: PLACEHOLDER_ACTION },
    { title: 'Configure Cron Job', text: 'cron', desc: '', example: '/cron ${ TIME } or /cron stop', required_arg: 2, action: fCronAction },
]

export { PREFIX, COMMANDS };