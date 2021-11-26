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