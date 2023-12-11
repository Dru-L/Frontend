// < 함수 >
// 1. 함수 선언
// 1) 선언적 함수
function funcTest() {

    alert('funcTest() 함수 호출');

    // return 'funcTest() 함수호출';

    // 값이 없는 return 키워드는 콘솔창에 암묵적으로 undefined를 반환한다.
    // return;
};

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

btn1.onclick = function() {
    let p1 = document.getElementById('p1');

    p1.innerHTML = '익명 함수 호출';
};

// * 스스로 실행하는 함수
// - 함수 정의와 동시에 즉시 실행되는 함수로, 단 한 번 호출된다.(재호출 불가) 
// - 매개변수인 a,b에 넣을 값들은 함수 밖 괄호 뒤에 작성한다.
(
    function (a,b) {
        document.getElementById('p1').innerHTML = `a + b = ${a + b}, (스스로 실행)`;
    }
)(10,30);

/*
    3) 화살표 함수
        [표현법]
            1) 매개 변수 처리
                - 매개 변수가 없을 떄 : () => { ... };
                - 매개 변수가 하나일 때 : (x) => { ... };  => x의 괄호 생략 가능
                - 매개 변수가 두 개 이상일 때 : (x, y, ...) => { ... }

            2) 리턴(반환) 처리
                - 처리할 라인이 여러 개라면 중괄호({})로 감싸서 처리한다.
                    (a, b) => {
                        let result = a + b;
                        return result;
                    };
                - 처리할 라인이 하나라면 중괄호({})와 return 문을 생략할 수 있다.
                    (a, b) => a + b;
*/

let btn2 = document.getElementById('btn2');

btn2.onclick = () => {
    let p2 = document.getElementById('p2');

    p2.innerHTML = '화살표 함수 호출';
};

// 2. 함수 호출
// 1)매개 변수
let btn3 = document.getElementById('btn3');

// 사용자가 하는 행위들은 프로그램 입장에서는 모두 '이벤트'이다.
// button에 click 이벤트가 발생했을 때 실행 할 이벤트를 설정
btn3.addEventListener('click', () => {
    // argTest();
    // 함수 안에 매개값 지정 시 매개값이 리턴됨
    // argTest('안녕하세요');
    // 매개변수는 1개지만 2개 설정 시, 오류는 나지 않지만 1개의 값만 저장됨
    argTest('안녕하세요', '반갑습니다');
});

// 함수 호출 할 때 매개값을 지정해주지 않으면 undifined(기본 매개값)가 뜸
// 매개값(value)의 기본값을 '매개값 없음'으로 지정
function argTest(value = '매개값 없음') {
    document.getElementById('p3').innerHTML = value;
};

// 2) arguments 객체 
// 호출할 때 마다 매개값이 다를 때 사용 
let btn4 = document.getElementById('btn4');

// btn4.addEventListener('click', () => {
btn4.addEventListener('click', function () {
    let result = 0;
    let p4 = document.getElementById('p4');

    // 화살표 함수에서는 arguments 객체를 생성하지 않는다.
    console.log(arguments);

    // result = sum();
    // result = sum(123, 600);
    // result = sum(123, 600, 900);
    result = sum(11, 22, 33, 44);

    p4.innerHTML = `result: ${result}`;
});

// function sum() {
//     let result = 0;

//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(typeof(arguments));

//     for(const value of arguments) {
//         result += value;    // result = result + value;
//     };

//     return result;
// };

// arguments를 사용하는 것 대신 Rest 파라미터(매개변수)를 사용해서 구현할 수 있다.
function sum(...numbers) {
    let result = 0;

    console.log(numbers);
    console.log(numbers.length);
    console.log(typeof(numbers));

    for (const number of numbers) {
        result += number;
    }
    return result;
};

// Spread 연산자를 활용하여 배열의 요소를 풀어서 함수(메소드)에 전달

// let array = [1, 3, 60, 8];
// Math.max(array[0], array[1], array[2], array[3]);
// Math.max(...array);

// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    alert(`random : ${random()}`);
});

// 1~100 까지의 랜덤값을 리턴하는 함수
function random() {
    let result = 0;

    result = parseInt(Math.random()*100)+1

    return result;
};

// 2) 익명 함수 리턴
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', () => {
    // 변수에 담아서 바로 호출
    // let func = returnTest();
    // func();

    // 변수에 담지 않고 바로 호출
    returnTest()();
});

function returnTest() {
    // *클로저(Closer)
    //   - 내부 함수가 사용하는 외부 함수의 지역 변수는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 갖는데,
    //     이러한 특성을 '클로저'라고 한다.
    let name = '홍길동';
    // let func = function() {
    //     alert('안녕하세요');
    // };

    // return func;

    return function() {
        alert(`${name}님 안녕하세요.`);
    };
};




// 4. 내장 함수
// 1) eval()함수
// evaluation의 약자로 문자열을 자바스크립트 코드로 변환하여 실행한다.
// 연산, alert() 등등 가능
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => { //클릭을 했을때 동작할 이벤트를 작성
    let p5 = document.getElementById('p5');
    let calc = document.getElementById('calc');

    p5.innerHTML = `실제 입력된 값 : ${calc.value}<br>`;
    p5.innerHTML += `eval() 후 : ${eval(calc.value)}`; //calc에 있는 문자열을 자바스크림트 코드로 변환.
});

// 2) isFinite(), isNaN()
// isFinite() : 숫자가 유한한 값인지 확인한다. infinity 값이 들어가면 false를 리턴한다.
// isNaN() : 숫자가 자바스크립트로 표현할 수 없는 숫자(NaN)인지 확인한다.
let btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
    let p6 = document.getElementById('p6');

    p6.innerHTML = '<h4>안녕하세요.</h4>';
    p6.innerHTML += `10 / 0 : ${10 / 0}<br>`;
    p6.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    // infinity : 무한대 , -infinity : 음의 무한대
    // p6.innerHTML += `-10 / 0 : ${(-10 / 0) === -Infinity}<br>`;
    p6.innerHTML += `-10 / 0 : ${isFinite(10 / 0)}<br>`;
    p6.innerHTML += `-10 / 0 : ${isFinite(-10 / 0)}<br>`; // 무한대의 값이기 떄문에 false 뜸
    p6.innerHTML += `-10 / 0 : ${isFinite(-10 / 2)}<br><br>`; // 유한대의 값이기 때문에 true
    p6.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`
    p6.innerHTML += `10 / 'a' : ${10 / 'a' === NaN}<br>` //NaN은 비교 연산자로 비교하면 제대로 된 결과나 나오지 않는다.
    p6.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>` // isNaN을 써야 제대로 된 결과가 나온다.
    p6.innerHTML += `isNaN(10 / 2) : ${isNaN(10 / 2)}<br>`
});


