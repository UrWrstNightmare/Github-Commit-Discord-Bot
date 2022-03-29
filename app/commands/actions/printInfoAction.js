import { VERSION } from "../../config/config.js";

const fPrintInfoAction = async (msg) => {
    let outStr = "[챗봇 정보]\n";
    outStr += "Created By: Jiho Park (@UrWrstNightmare)\n";
    outStr += `Last Updated: 2022-03-30 (${ VERSION })\n\n`;
    outStr += "이 디코 봇은 무료로 사용자의 커밋 현황을 확인해 줍니다. /check-commit [사용자 이름] 커맨드를 이용해 보세요\n";
    outStr += "커맨드에 대해 궁금하다면 /help를 이용해 보세요\n\n";
    outStr += "이 봇의 Github Repo: https://github.com/UrWrstNightmare/Github-Commit-Discord-Bot\n";
    outStr += "많은 Star 🌟, Follow 부탁드립니다 😀\n\n";

    await msg.reply(outStr);
    return true;
}

export default fPrintInfoAction;