function diceRoll() {
  let diceNum = Math.floor(Math.random() * 6) + 1;
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
