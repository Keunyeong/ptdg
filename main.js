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

// 인원 설정 버튼 요소
const btnOfPoeole = document.querySelector("#peopleBtn");
// Roll 버튼 요소
const btnOfRoll = document.querySelector("#rollBtn");
// 인원 설정 input 요소
const inputOfPeople = document.querySelector("#people");
// scoreboard table 요소
const table = document.querySelector("#table");
// dice 테이블 요소
const diceTable = document.querySelector("dice-table");

const btnOfTurn = document.querySelector("#turnBtn");
// 현재턴 알렬주는 div
const nowTurn = document.querySelector(".nowTurn");
// 현재턴 알려주는 div > span
const turnNumber = document.querySelector("#turnNumber");
// 현재 턴이 모은 점수, 상태 나타내는 요소
const scoreStatus = document.querySelector("#status");


let diceNum = 0;
let currentScore = 0;
let currentIndex = 0;
let numOfPeople = 2;
let arrOfMembers = [];

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

function paintTable(arr) {
  arr.forEach(function (_, i) {
    const div = document.createElement("div");
    div.className = "row";
    const span1 = document.createElement("span");
    span1.className = "cell col1";
    span1.innerText = arr[i].id + 1;
    const span2 = document.createElement("span");
    span2.className = "cell col2";
    span2.innerText = arr[i].accScore;
    div.appendChild(span1);
    div.appendChild(span2);
    table.appendChild(div);
  });
}

function peopleCheck() {
  numOfPeople = inputOfPeople.value;
  // player => id(=index)
  arrOfMembers = Array.apply(null, Array(parseInt(numOfPeople))).map(
    function () {}
  );
  arrOfMembers.forEach((_, i) => (arrOfMembers[i] = { id: i, accScore: 0 }));

  paintTable(arrOfMembers);

  btnOfPoeole.classList.add("hidden");
  inputOfPeople.classList.add("hidden");
  btnOfRoll.classList.remove("hidden");
  btnOfTurn.classList.remove("hidden");
  nowTurn.classList.remove("hidden");
}

//턴 넘기기
function turnChange() {
  // 1 이나오면 현재 점수는 0 점
  // 현재점수 더하고 다음 차례로 넘기기
  arrOfMembers[currentIndex].accScore += currentScore;
  // 차례 인덱스가 갖은 총 점이 100점이 넘으면 승리 나타내고 버튼 감추기
  if (arrOfMembers[currentIndex].accScore >= 100){
    btnOfRoll.classList = "hidden";
    btnOfTurn.classList = "hidden";
    scoreStatus.innerHTML=`<div>${currentIndex+1}번 승리!!!</div>`;
  } else { 
    // 100점이 안되면 테이블에 점수 표기하고 현재점수 0점으로 바꿔주기
    table.children[currentIndex + 1].querySelector(".col2").innerText =
    arrOfMembers[currentIndex].accScore;
    //.innerText = arrOfMembers[currentIndex].accScore;
    currentScore = 0;
    if (arrOfMembers[arrOfMembers.length - 1].id === currentIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    scoreStatus.innerHTML=`<div>다음</div>`;
    turnNumber.innerHTML=currentIndex+1;
  }
  
}

// 2주사위 1나오면
function accountNum(diceNum) {
  if (diceNum === 1) {
    setTimeout(() => {
      alert("1 이라니.. 차례가 넘어갑니다.");
    }, 1000);
    currentScore = 0;
    turnChange();
  } else {
    scoreStatus.innerHTML=`<div>${currentScore + diceNum}</div>`
    currentScore = currentScore + diceNum;
  }
}

btnOfPoeole.addEventListener("click", peopleCheck);
btnOfRoll.addEventListener("click", diceRoll);
btnOfTurn.addEventListener("click", turnChange);
