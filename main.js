let diceNum=0;
function diceRoll() {
    diceNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.querySelector("#diceImage");
    let dice = "images/dice" + diceNum + ".svg";
    diceImage.innerHTML = `<img 
                        class="animate__animated animate__rotateIn" 
                        src="${dice}"
                        style="border-radius:10px;"
                        >`;
}

const btnOfPoeole = document.querySelector("#peopleBtn");
const btnOfRoll = document.querySelector("#rollBtn");
const inputOfPeople = document.querySelector("#people");
const table = document.querySelector("#table");
const diceTable = document.querySelector("dice-table");
const turnBtn = document.querySelector("#turnBtn");
let arrOfMembers;

function peopleCheck() {
const numOfPeople = inputOfPeople.value;
// player => id(=index)
arrOfMembers = Array.apply(null, Array(parseInt(numOfPeople))).map(
    function () {}
);
arrOfMembers.forEach(
    (_, i) => (arrOfMembers[i] = { id: i, nowScore: 0, accScore: 0 })
);
paintTable(arrOfMembers);
btnOfPoeole.className = "hidden";
inputOfPeople.className = "hidden";
btnOfRoll.classList.remove("hidden");
turnBtn.classList.remove("hidden");
}

function paintTable(arr) {
arr.forEach(function (_, i) {
    const div = document.createElement("div");
    div.className = "row";
    const span1 = document.createElement("span");
    span1.className = "cell col1";
    span1.innerText = arr[i].id + 1;
    const span2 = document.createElement("span");
    span2.className = "cell col2";
    span2.innerText = arr[i].nowScore;
    const span3 = document.createElement("span");
    span3.className = "cell col3";
    span3.innerText = arr[i].accScore;
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    table.appendChild(div);
});
}

btnOfPoeole.addEventListener("click", peopleCheck);
btnOfRoll.addEventListener("click", diceRoll);

let turn = false;

//턴 넘기기
function turnChange() {
    turn = !turn;
    if(turn) {
        //다음 차례로 넘기기
        //인강 시간 너무 길어요
        turn = false;
    } 
};

let currentScore = 0;

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