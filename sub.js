//id 미정
//const numOfPeople = document.querySelector(".input");
n = 5;
const arr = Array.apply(null, Array(n)).map(function () {});

arr.forEach((x, i) => (arr[i] = { id: 1, accScore: 0, nowScore: 0 }));

let table = `<table>
              <tr>
                <th>차례</th>
                <th>1회</th>
                <th>점수</th>
              </tr>
            </table>`;
