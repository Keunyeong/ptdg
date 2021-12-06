// 설정되는 인원 만큼 score: 0 을 갖은 객체 배열 생성 -> 설정 사라지고
// 테이블 생성
// roll 버튼 위에 차례가 누군지 보여주기 ex) 1번 차례입니다!
// 테이블에 차례 row 하이라이트
// 주사위 굴리면
// roll 버튼이랑 턴 넘기기 버튼 보이기
// 1 나오면 헌재점수 삭제 -> 턴넘기기
// 1 이 아니면 현재점수에 추가
// 턴넘기기 하면 현재점수를 전부 score에 넣고 다음 인덱스로
// roll 버튼 위에 차례가 누군지 보여주기 ex) 2번 차례입니다!
// 배열 인덱스 +1 해서 다음 객체로 넘김
// 계속 넘어가다가 설정 인원 -1 보다 커지면 인덱스 0 객체로 돌아오도록
// 현재 점수에 추가 될 때마다 객체 score: 100 인지 확인
// score 100이면 다지우고 인덱스 번호 +1 (차례번호)가 승리하였습니다. 보여주고
// 승리 밑에 다시하기 버튼.

const btnOfPoeole = document.querySelector("#peopleBtn");
const btnOfRoll = document.querySelector("#rollBtn");
const inputOfPeople = document.querySelector("#people");
const table = document.querySelector("#table");
const diceTable = document.querySelector("dice-table");
const turnBtn = document.querySelector("#turnBtn");

let diceNum=0;
let currentScore = 0;
let currentIndex = 0;
function diceRoll() {
    diceNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.querySelector("#diceImage");
    let dice = "images/dice" + diceNum + ".svg";
    diceImage.innerHTML = `<img 
                        class="animate__animated animate__rotateIn" 
                        src="${dice}"
                        style="border-radius:10px;"
                        >`;
    accountNum(diceNum);
}

btnOfRoll.addEventListener("click",diceRoll());


let arrOfMembers = [];

let numOfPeople = 1;
function peopleCheck() {
numOfPeople = inputOfPeople.value;
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

// 2주사위 1나오면
function accountNum(diceNum){
    if(diceNum === 1){
        setTimeout(() => {
            alert("1 이라니.. 차례가 넘어갑니다.");
        }, 1000);
        currentScore = 0;
        turnChange();
    } else {
        currentScore = currentScore + diceNum;
    }
}

const gameOver = document.createElement('div');
const printNowScore = document.getElementsByClassName("cell col2");
const printAccScore = document.getElementsByClassName("cell col3");
const replayBut = document.createElement("button");
replayBut.addEventListener("click", window.location.reload());
replayBut.innerText("REPLAY");

function checkScore (iPlayer) {
    if (diceNum === 1) {
        // 현재 점수 = 0, 턴 자동으로 넘기기
        printNowScore.innerText = diceNum;
        printAccScore.innerText = diceNum;
        alert("0점입니다")
        currentScore = 0;
        return;
    }
    // 현재 점수 업데이트, 100 검증 함수 실행
    currentScore += diceNum;
    printNowScore.innerText = diceNum;
    printAccScore.innerText = diceNum;

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
    diceTable.classList.add("hidden");

    // [Game Over]
    gameOver.append("Game Over");
    
    // replay 버튼
    document.body.appendChild(replayBut);
}