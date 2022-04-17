
const examMoralCount = 5;
const fExamMoralBoostingStrings = (username, index) => {
    switch (index) {
        case 0: return `${ username }, 이번 시험 꼭 A+ 맞을 거라구 😉 아자아자!`;
        case 1: return `교수, 너가 ${ username } 보다 똑똑해?`;
        case 2: return `시험이 3시간 밖에 남은 것이 아니라 공부할 시간이 3시간이나 남은 것이다`;
        case 3: return `이번 시험에는 꼭 공부한 것만 나올거야, ${ username } 💪`;
        case 4: return `시험은 ${ username } 을 막을 수 없지 후후...`;
        default: return `음 개발자가 코드를 이상하게 짜서 일어나면 안되는 결과가 출력되었어요`;
    }
}

const commitMoralCount = 5;
const fCommitMoralBoostingStrings = (username, index) => {
    switch (index) {
        case 0: return `${ username }, 오늘도 1커밋을 할 생각을 했구나... 훌륭해 ✨`;
        case 1: return `똑똑한 ${ username }은 오늘도 1커밋을 할 수 있을거야!`;
        case 2: return `옆집 철수는 오늘도 1커밋을 했다는데... 우리 ${ username }도 할 수 있지 않을까 🤔`;
        case 3: return `의학적으로 1일 1커밋은 건강에 좋다는 것이 밝혀졌습니다 의사 5명 중 4명이 추천한.`;
        case 4: return `1커밋 신을 믿거라... 불쌍한 ${ username } 중생아... 🙏`;
        default: return `음 개발자가 코드를 이상하게 짜서 일어나면 안되는 결과가 출력되었어요`;
    }
}

const fDopamineAction = async (msg, type) => {
    //console.log(msg);
    let index = 0;
    switch (type) {
        case "exam" :
            index = Math.floor(Math.random() * examMoralCount );
            await msg.reply(fExamMoralBoostingStrings( msg.author.username, index ));
            break;
        case "commit" :
            index = Math.floor(Math.random() * commitMoralCount );
            await msg.reply(fCommitMoralBoostingStrings( msg.author.username, index ));
            break;
        default :
            await msg.reply('뭔지 모르겠지만 화이팅!');
    }
    return true;
}

export default fDopamineAction;