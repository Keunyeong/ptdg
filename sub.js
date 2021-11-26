// 일단 플레이어 수는 5로 고정
// const numOfPeople = document.querySelector(".input");
n = 5;
const arrOfMembers = Array.apply(null, Array(n)).map(function () {});

//player => id(=index)
arrOfMembers.forEach(
  (x, i) => (arrOfMembers[i] = { id: i, accScore: 0, nowScore: 0 })
);

function paintTable(arr) {
  const div = document.createElement("div");
  div.class = "row";
  arr.forEach(function (x, i) {
    const span1 = document.createElement("span");
    span1.innerText = `${arr[i].id}`;
    const span2 = document.createElement("span");
    span2.innerText = `${arr[i].nowScore}`;
    const span3 = document.createElement("span");
    span3.innerText = `${arr[i].accScore}`;
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
  });
  return div;
}
