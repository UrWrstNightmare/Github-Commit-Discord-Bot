import fCronAction from "./actions/cronAction.js";
import fHelpAction from "./actions/helpAction.js";
import fCheckCommitAction from "./actions/checkCommitAction.js";
import fCheckEventAction from "./actions/checkEventAction.js";
import fPrintInfoAction from "./actions/printInfoAction.js";
import fDopamineAction from "./actions/domaineAction.js";
import fGachaAction from "./actions/gachaAction.js";

const PLACEHOLDER_ACTION = async (msg) => {
    await msg.reply('PLACEHOLDER');
}

const PREFIX = "/";

const COMMANDS = [
    { title: 'Info', text: 'info', desc: '', example: '', required_arg: 1, action: fPrintInfoAction },
    { title: 'Help', text: 'help', desc: '이 도움말을 출력합니다', example: '/help', required_arg: 1, action: fHelpAction },
    { title: 'Check Event Status', text: 'check-event', desc: '사용자의 Github 이벤트 현황을 확인합니다', example: '/check-event [ USERNAME ] [ OPTIONAL: DATE OFFSET ]', required_arg: 2, action: fCheckEventAction },
    { title: 'Check Commit Status', text: 'check-commit', desc: '사용자의 Github 커밋 현황을 확인합니다', example: '/check-commit [ USERNAME ] [ OPTIONAL: DATE OFFSET ]', required_arg: 2, action: fCheckCommitAction },
    { title: 'Register User', text: 'register', desc: '', example: '', required_arg: 3, action: PLACEHOLDER_ACTION },
    { title: 'Unregister User', text: 'unregister', desc: '', example: '', required_arg: 2, action: PLACEHOLDER_ACTION },
    { title: 'List Users', text: 'ls-user', desc: '', example: '', required_arg: 1, action: PLACEHOLDER_ACTION },
    { title: 'Configure Cron Job', text: 'cron', desc: '', example: '/cron ${ TIME } or /cron stop', required_arg: 2, action: fCronAction },
    { title: 'Print Moral Boosting String', text: 'dopamine', desc: '', example: '/dopamine [ exam | commit ]', required_arg: 2, action: fDopamineAction },
    { title: 'Gacha!', text: 'gacha', desc: '', example: '/gacha', required_arg: 1, action: fGachaAction },
]

export { PREFIX, COMMANDS };