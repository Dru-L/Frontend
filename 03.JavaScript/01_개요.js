var btn2 = document.getElementById('btn2');

// btn2.onclick = function() {
//     console.log('"console 출력 버튼" 클릭!')
// };

function consolePrint() { // 함수를 값처럼 쓴다.
    console.log('"console 출력 버튼" 클릭!')
};

btn2.onclick = consolePrint;
//()은 호출한다는 의미. 여기선 함수 이름만 써야한다. 이미 함수는 호출되어있기 때문.

