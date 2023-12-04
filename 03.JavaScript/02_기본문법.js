//1. 변수
//1) 변수 선언
// 전역 변수 선언
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';

console.log(str1);
console.log(str2);
console.log(str3);


// onload 속성은 자바스크립트에서 페이지가 모두 로드되면 실행될 함수를 구현할 때 사용한다.
window.onload = function(){ //지역변수 : {} 안에서만 이용되는 변수
    // var h2 = document.getElementById('heading2');
    // h2.style.backgroundColor = 'red';
    var str4 = 'var 지역변수';
    let str5 = 'let 지역변수';
    str6 = '지역변수'
    var str7;

    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(str4);
    console.log(str5);
    console.log(str6);
    console.log(str7);
};