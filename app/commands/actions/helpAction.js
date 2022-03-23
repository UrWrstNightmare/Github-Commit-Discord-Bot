import { COMMANDS } from "../index.js";
import { VERSION } from "../../config/config.js";

const fHelpAction = async (msg) => {
    await msg.reply(`커맨드에 대한 도움말을 출력합니다. - ${ VERSION }`);

    let allCommandStr = '';
    for ( const command of COMMANDS ) {
        let commandStr = '- ';

        commandStr += `${ command.title }: ${ command.desc }\n`;
        commandStr += `  ex) ${ command.example }`;
        commandStr += '\n';

        allCommandStr += commandStr;
    }

    await msg.reply(allCommandStr);

    const wittyRemarks = [
        '지호한테 잘 보이면 새로운 커맨드가 추가될 수 있어요!',
        '이 많은 커맨드를 만들다니... 개발자가 불쌍하지 않나요 ㅠㅠ',
        '커맨드 1+1 행사 중입니다!',
    ]
    const randomNo = Math.floor(Math.random() * wittyRemarks.length);

    await msg.reply(wittyRemarks[randomNo]);

    return true;
}

export default fHelpAction;