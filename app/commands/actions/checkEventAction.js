import {fGetUserCommits} from "../../api/github.js";

const fCheckEventAction = async (msg, username, dateOffset = 0) => {
    console.log(username);
    const data = await fGetUserCommits( username, dateOffset );

    const compareDate = new Date();
    compareDate.setDate(compareDate.getDate() - dateOffset);

    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    let replyString = `${ username }의 ${ compareDate.getMonth() + 1 }월 ${ compareDate.getDate() }일 (${ dayNames[compareDate.getDay()] }) 활동\n`;
    replyString += `[ 총 활동 수: ${ data.length } ]\n\n`;

    data.forEach( (data, i) => {
        replyString += `#${ String(i + 1).padStart(2, '0') } - ${ data.type } @ ${ data.repo.name }\n`;
    } )
    await msg.reply( replyString );
    return true;
}

export default fCheckEventAction;