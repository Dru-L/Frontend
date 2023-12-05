//1. 변수
//1) 변수 선언
// 전역 변수 선언
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';

// console.log(str1);
// console.log(str2);
// console.log(str3);

//전역으로 선언된 함수는 window 객체로 window 객체 내부에 포함된다.
function add(a,b){
    return a+b
};


// onload 속성은 자바스크립트에서 페이지가 모두 로드되면 실행될 함수를 구현할 때 사용한다.
window.onload = function(){ //지역변수 : {} 안에서만 이용되는 변수
    // var h2 = document.getElementById('heading2');
    // h2.style.backgroundColor = 'red';
    var str4 = 'var 지역변수';
    let str5 = 'let 지역변수';
    str6 = '지역변수'
    var str7;

    //전역 변수와 동일한 이름의 지역 변수를 선언
    //전역 변수와 지역 변수가 동일한 이름인 경우, 함수 내부에서 사용하면
    //지역 변수가 우선권을 가진다.
    var str2 = 'var 지역변수';

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log(str7);

    console.log('------------------------------------------------------');

    //var, let, const(상수)의 차이점
    //1) 중복 선언
    // var 키워드로 선언된 변수는 중복 선언이 가능하다.
    var num = 0;
    console.log(num);

    var num = 10;
    console.log(num);

    var num = 20;
    console.log(num);

    //let, const 키워드로 선언된 변수
    // let, const 키워드로 선언된 변수는 중복 선언이 가능하다.
    let num2 = 10;
    console.log(num2);

    // let num2 = 20;
    // console.log(num2); //에러

    const num3 = 10; // 선언과 동시에 초기화 해야한다.
    console.log(num3);

    // const num3 = 20;
    // console.log(num3); //에러

    //num3 = 30; // 상수는 값의 재할당이 불가능하다.


    console.log('------------------------------------------------------');
    // 2) 유효 범위 (스코프)
    // 함수 안에서 var 키워드로 선언된 변수는 함수 유효 범위를 갖는다.
    if(true){
        var num4 = 10;
        console.log(num4);
    }
    console.log(num4);

    // 함수 안에서 let, const키워드로 작성된 변수는 블록 유효 범위를 갖는다.
    if(true){
        let num5 = 50;
        const num6 = 50;
        console.log(num5);
        console.log(num6);
    }
    // console.log(num5); //에러
    // console.log(num6); //에러

    console.log('------------------------------------------------------');
    
    // 3) 호이스팅 동작 방식
    // var 키워드로 선언한 변수는 변수 호이스팅에 의해
    // undefined가 출력된다.
    // 변수의 선언문이 코드의 선두로 끌어 올려진 것처럼
    // 동작하는 자바스크립트의 고유한 특징을 '변수 호이스팅'이라고 한다.
    console.log(num7); //선언 전에는 undefined로 초기화 되어있다.

    var num7 = 80;

    console.log(num7);
    
    //let, const 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는것 처럼 동작한다.
    // console.log(num8); //에러
    // let num8 = 80;

    // console.log(num9); //에러
    // const num9 = 90;

    console.log('------------------------------------------------------');

    // 4) 전역 변수 동작 방식
    // var 키워드로 선언한 전역 변수와 키워드를 선언하지 않은 전역 변수는 window 객체 내부에 포함된다.
    // let, const 선언한 전역 변수는 window 객체에 포함되지 않는다.
    console.log(this.str1);
    console.log(window.str1);
    console.log(this.str2);
    console.log(window.str2);
    console.log(this.str3);
    console.log(window.str3);
};

function typeTest(){
    let name = '홍길동'; // 문자열
    let age = 20; // 숫자
    let height = 183.5; // 숫자
    let check = false; // 논리값
    let hobbies = ['축구', '야구', '농구']; // 배열
    let user = {
        id: 'hong123',
        name: '홍길동',
        age: 20,
        height:183.5,
        // hobbies: ['축구', '야구', '농구']
        // hobbies: hobbies
        hobbies
    };
    //함수 
    let addFunc = function (x, y){
        return x + y;
    }
    let div1 = document.getElementById('div1');

    console.log(hobbies);
    console.log(user);
    console.log(addFunc(10,20));

    div1.innerHTML = "<h4>안녕하세요.</h4>"
    div1.innerHTML += `name : ${name}, type:${typeof(name)} <br>`;
    div1.innerHTML += `age : ${age}, type:${typeof(age)}<br>`;
    div1.innerHTML += `height : ${height}, type:${typeof(height)}<br>`;
    div1.innerHTML += `check : ${check}, type:${typeof(check)}<br>`;
    div1.innerHTML += `hobbies : ${hobbies}, type:${typeof(hobbies)}<br>`; //타입은 객체(object).
    div1.innerHTML += `user : ${user}, type:${typeof(user)}<br>`; 
    // 변수에 타입을 넣지 않지만, 자동으로 타입이 들어간다.
    
};


function plusTest(){
    // + 는 산술연산자 이면서 연결 연산자이기 때문에, 문자가 있으면 연결 연산자 작용을 한다.
    let result1 = 7 + 7; //둘다 숫자면 산술연산자로 적용된다. 값: 14
    let result2 = 7 + '7'; // 한개가 문자면 숫자가 문자데이터로 형변환되어서 연결 연산자로 적용. 값: 77
    let result3 = 7 + 7 + '7'; // 먼저 산술연산 후 문자형변환하여서 마지막 연결 연산. 값: 147
    let result4 = '7' + (7 + 7); //()안에 있는거 먼저 연산 후 문자열과 합친다. 값: 714
    // *, - 는 산술연산자이기 때문에 문자를 숫자로 변환해준다.
    let result5 = 7 * '7'; // 값: 49
    let result6 = '7' - 3; // 값: 4
    let result7 = '7' * '7'; // 값: 49
    let result8 = '7' * 'a'; //값 : NaN : Not a Number (나름 값이다)
    let div2 = document.getElementById('div2');

    div2.innerHTML = '<h4>안녕하세요</h4>';
    div2.innerHTML += `result1: ${result1}<br>`;
    div2.innerHTML += `result2: ${result2}<br>`;
    div2.innerHTML += `result3: ${result3}<br>`;
    div2.innerHTML += `result4: ${result4}<br>`;
    div2.innerHTML += `result5: ${result5}<br>`;
    div2.innerHTML += `result6: ${result6}<br>`;
    div2.innerHTML += `result7: ${result7}<br>`;
    div2.innerHTML += `result8: ${result8}<br>`;
}

function castingTest(){
    let div3 = document.getElementById('div3');

    div3.innerHTML = '<h4>안녕하세요.</h4>';

    //문자열 -> 숫자 데이터로 형 변환하는 방법
    div3.innerHTML += `${Number('3')}, type: ${typeof(Number('3'))}<br>`; // 대문자로 시작하는 함수는 생성자 함수
    div3.innerHTML += `${parseInt('3')}, type: ${typeof(parseInt('3'))}<br>`;
    div3.innerHTML += `${parseFloat('3.2')}, type: ${typeof(parseFloat('3.2'))}<br>`;

    // 숫자 -> 문자열
    div3.innerHTML += `${String(3)}, type: ${typeof(String(3))}<br>`;
    div3.innerHTML += `${3 + ''}, type: ${typeof(3 + '')}<br>`;

}


function opTest(){
    let div4 = document.getElementById('div4');

    div4.innerHTML = '<h4>안녕하세요.</h4>';
    div4.innerHTML += `5 == 5 : ${5 == 5}<br>`; //true
    div4.innerHTML += `5 == '5' : ${5 == '5'}<br>`; //true. 값만 비교.

    div4.innerHTML += `5 === 5 : ${5 === 5}<br>`; //true
    div4.innerHTML += `5 === '5' : ${5 === '5'}<br>`; //false. 값과 데이터 타입 비교.

    div4.innerHTML += `5 != 5 : ${5 != 5}<br>`; //false
    div4.innerHTML += `5 != '5' : ${5 != '5'}<br>`; //false

    div4.innerHTML += `5 !== 5 : ${5 !== 5}<br>`; //false
    div4.innerHTML += `5 !== '5' : ${5 !== '5'}<br>`; //true
}

function forTest() {
    let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let user = {
        name: '홍길동',
        age: 25,
        height: 180.5
    };
    let div5 = document.getElementById('div5');

    div5.innerHTML = '<h4>안녕하세요.</h4>';

    // for 구문
    // for (let i = 0; i < array.length; i++) {
    //     div5.innerHTML += `${array[i]} `;
    // }

    // for in 구문
    // 배열의 경우 반복 변수에 array의 index 값을
    // 순서대로 담아서 반복시킨다.
    // for (let i in array) {
    //     console.log(i);

    //     div5.innerHTML += `${array[i]} `;
    // }

    // for of 구문
    // 배열의 경우 반복 변수에 array의 value 값을
    // 순서대로 담아서 반복시킨다.
    for(let value of array) {
        div5.innerHTML += `${value} `;
    }

    div5.innerHTML += '<br><br>';

    console.log(user);

    // for in 구문
    for (const key in user) {
        console.log(key);
        console.log(user[key]);
        div5.innerHTML += 
            `${key}, type: ${typeof (key)}, value: ${user[key]}<br>`;
    }

    // for of 구문
    // 객체의 경우 for of 구문을 사용할 수 없다.
    // for (const value of user) {
    //     console.log(value);
    // }

}