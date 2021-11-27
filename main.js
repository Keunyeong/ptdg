let turn = true;
const turnBtn = document.getElementById('turnBtn');

//턴 넘기기
turnBtn.addEventListener('click', () => {
    turn = !turn;
    if(turn) {
        //다음 차례로 넘기기

        turn = true;
    } 
});

let currentScore = 0;
let diceNum; // 랜덤 주사위로 나온 숫자

if (diceNum === 1) {
    currentScore = 0;
    // 다음 사람 턴
}   else {
    currentScore += diceNum;
        if (currentScore >= 100) {
            // 게임 종료
        } else {
            if(실행조건 ) { // 실행 O
                // 주사위 함수 실행
            } else {
                // 다음 사람 턴
                // 😃😃
            }
        }
}

