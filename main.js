let turn = false;
const turnBtn = document.getElementById('turnBtn');

//턴 넘기기
turnBtn.addEventListener('click', () => {
    turn = !turn;
    if(turn) {
        //다음 차례로 넘기기
        //인강 시간 너무 길어요
        turn = false;
    } 
});

import { arrOfMembers } from "sub.js";

let currentScore = 0;
let diceNum; // 랜덤 주사위로 나온 숫자

const gameOver = document.createElement('div');
const replayBut = document.createElement("button");

function checkScore (iPlayer) {
    if (diceNum === 1) {
        // 현재 점수 = 0, 턴 자동으로 넘기기
        alert("0점입니다")
        currentScore = 0;
        return;
    }
    // 현재 점수 업데이트, 100 검증 함수 실행
    currentScore += diceNum;
    if(checkHundred(currentScore)){
        // 게임 종료
        setGameOver(iPlayer);
        return;
    }
    choiceGoOrStop();
}

function checkHundred(currentScore) {
    if (currentScore >= 100) {
        return true;
    } 
    return false;
}

function choiceGoOrStop () {
    if(1) { // true(go)
        // 주사위 버튼(Roll) 열림, 턴 버튼 닫힘
        btnOfRoll.classList.remove("hidden");
        turnBtn.classList.add("hidden");
        return;
    }
    // false(stop)
    // 주사위 버튼(Roll) 닫힘, 턴 버튼 열림
    btnOfRoll.classList.add("hidden");
    turnBtn.classList.remove("hidden");
}

function setGameOver (iPlayer) {
    document.getElementById("dice-table").style.display="none";
    // [Game Over]
    gameOver.append("Game Over");
    // replay 버튼
    const replayBut = document.createElement('button');
    replayBut.appendChild("REPLAY");
    document.body.appendChild(replayBut);
}