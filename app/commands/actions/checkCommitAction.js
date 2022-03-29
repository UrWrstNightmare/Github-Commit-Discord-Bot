import {fGetUserCommits} from "../../api/github.js";

const fCheckCommitAction = async (msg, username, dateOffset = 0) => {
    console.log(username);
    const data = await fGetUserCommits( username, dateOffset );

    const commitData = data.filter(( elem ) => elem.type === "PushEvent");

    const compareDate = new Date();
    compareDate.setDate(compareDate.getDate() - dateOffset);

    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    let replyString = `${ username }의 ${ compareDate.getMonth() + 1 }월 ${ compareDate.getDate() }일 (${ dayNames[compareDate.getDay()] }) 커밋\n`;

    replyString += `[ 총 커밋 수: ${ commitData.length } ]\n\n`;

    commitData.forEach( (data, i) => {
        const commitData = data.payload.commits[0];
        replyString += `Commit #${ String(i + 1).padStart(2, '0') } - @ ${ data.repo.name } #${ commitData.author.name } (${ commitData.author.email })\n> Commit-Message: ${ commitData.message } \n> Timestamp: ${ (new Date(data.created_at)).toTimeString() }\n\n`;
    } )
    await msg.reply( replyString );
    return true;
}

export default fCheckCommitAction;