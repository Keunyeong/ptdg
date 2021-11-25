//턴 넘기기
let turn = true;
const turnBtn = document.getElementById('turnBtn');

turnBtn.addEventListener('click', () => {
    turn = !turn;
    if(turn) {
        //다음 차례로 넘기기
        
        turn = true;
    } 
});