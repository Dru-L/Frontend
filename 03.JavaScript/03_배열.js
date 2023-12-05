window.onload = function () {
    // 1. 배열 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let array1 = []; // []
        let array2 = new Array(); // []
        let array3 = new Array(3); // [empty x 3]
        let array4 = ['빨강', '파랑', '노랑', '초록'];
        let array5 = new Array('빨강', '파랑', '노랑', '초록');
        let array6 = Array.of('빨강', '파랑', '노랑', '초록');
        let array7 = [
            '홍길동',        // 문자열
            25,             // 숫자
            true,           // 논리
            [1, 2, 3, 4],   // 배열
            {},             // 객체
            function (){}   // 함수
        ];
        let div1 = document.getElementById('div1');

        console.log(array1, array2, array3);
        console.log(array4, array5, array6);
        console.log(array7);

        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';

        array2[0] = '현대';
        array2[1] = '기아';
        array2[2] = '벤츠';
        array2[3] = 'BMW';
        array2[4] = '아우디';

        div1.innerHTML = '<h4>안녕하세요</h4>';
        div1.innerHTML += 
            `array1: [${array1}], length: ${array1.length}<br>`;
        div1.innerHTML += 
            `array2: [${array2}], length: ${array2.length}<br>`;
        div1.innerHTML += 
            `array3: [${array3}], length: ${array3.length}<br>`;
        div1.innerHTML += 
            `array4: [${array4}], length: ${array4.length}<br>`;
        div1.innerHTML += 
            `array5: [${array5}], length: ${array5.length}<br>`;
        div1.innerHTML += 
            `array6: [${array6}], length: ${array6.length}<br>`;
        div1.innerHTML += 
            `array7: [${array7}], length: ${array7.length}<br>`;
    };
};