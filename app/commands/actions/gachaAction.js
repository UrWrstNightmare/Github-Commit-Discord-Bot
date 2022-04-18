const LGachaTiers = [
    { name: "Common", displayName: "Common", tier: 1, probabilityNum: 6000000 },
    { name: "Rare", displayName: "Rare", tier: 1, probabilityNum: 3000000 },
    { name: "Epic", displayName: "Epic", tier: 1, probabilityNum: 900000 },
    { name: "Legendary", displayName: "Legendary", tier: 1, probabilityNum: 99999 },
    { name: "???", displayName: "YOONA (THE JUNSEOL)", tier: 1, probabilityNum: 1 },
]

const ITotalProbability =( () => {let sum = 0; LGachaTiers.forEach((e) => sum += e.probabilityNum); return sum;} )();

const LTierItems = [
    [ "지호의 코풀고 남은 휴지", "끓이고 남은 라면 봉지", "수험생의 눈물", "볼펜 똥", "먹다남은 맥도날드 케첩봉지", "준빈이의 머리카락 (아 이거는 레어일지도?)", "지우의 셀카", "현민이의 마인마인이 피규어", "뭔가 쓸모있어 보이는 안경닦이", "줄이 끊어진 이어폰", "뒤틀린 황천의 김치", "민트초코" ],
    [ "서브웨이 샌드위치 교환권", "길가다 주운 이쁜 돌멩이", "책상 위에 놓을 수 있는 아기자기한 시계", "핸드폰 케이스", "선배의 족보!", "보조베터리 20000mAh", "지호의 격려의 메시지", "게임 20000캐시", "다용도 가위", "다이소 2000원 교환권", "잡화점에서 구매한 슬리퍼"],
    [ "미스릴 샌드위치", "카게분신술 (1회)", "랜덤 텔포권 (주의: 진짜 랜덤임)", "랜덤 소원권 (주의: 진짜 랜덤임)", "산타 소환권 (주의: 소환에 응하지 않을 수도 있음)", "할리데이 (라면 받침용 이과 ver)", "시험에서 공학용계산기 1회 이용권 (주의: 교수한테 들키면 안됨)", ">>몬스터<< (HP +200, ST +100, MP -200)", "불닭볶음면", "뒤틀린 황천의 김치 소생권"],
    [ "알고리즘 1회 커밋 면제권", "문제해결을 위한 창의적 알고리즘 [고급]", "지호의 가호", "깃허브의 축복", "이세계 환생 트럭 1회 소환권"],
    [ "★★★ 유나의 다이어리 ★★★", "★★★ 유나의 등짝스매시 1회 면제권 ★★★", "★★★ 유나의 숨겨둔 초콜릿 ★★★" ]
]

const SGetTierString = (tierNum) => {
    let retStr = "";
    for (let i = 0; i < 5; i++) {
        if (tierNum >= i) retStr += "★";
        else retStr += "☆";
    }
    return retStr;
}


const fGachaAction = async (msg) => {
    let randomTierNo = Math.floor( Math.random() * ITotalProbability );
    let tier = 0;
    for (let i = 0; i < LGachaTiers.length; i++) {
        if (randomTierNo < LGachaTiers[i].probabilityNum) {
           tier = i; break;
        }
        randomTierNo -= LGachaTiers[i].probabilityNum;
    }
    let randomItemNo = Math.floor( Math.random() * LTierItems[tier].length );

    //console.log(tier, randomItemNo);
    await msg.reply(`✨✨✨ **[ 가챠 결과 ]** ✨✨✨\n아이템:  **${ LTierItems[tier][randomItemNo] }** (${ LGachaTiers[tier].displayName } 티어 - ${ SGetTierString(tier) })\n*${ LGachaTiers[tier].displayName }은 [${ (LGachaTiers[tier].probabilityNum / ITotalProbability ) * 100  }%] 확률로 나오는 티어 입니다*\n축하합니다! ${ msg.author.username }은 ${ LGachaTiers[tier].displayName } 티어 중 ${ randomItemNo + 1 }/${ LTierItems[tier].length } 번째 아이템을 GET 했습니다!`);

    return true;
}

export default fGachaAction;