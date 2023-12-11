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

    let btn2 = document.getElementById('btn2');

    btn2.onclick = function(){
        let div2 = document.getElementById('div2');

        //1) indextOf() : 배열에서 요소가 위치한 인덱스를 리턴한다.
        /*let array = ['체리','메론','수박','귤','딸기'];

        div2.innerHTML = `array: [${array}]<br>`;
        div2.innerHTML += `array.indexOf('귤') : ${array.indexOf('귤')}<br>`; //3
        div2.innerHTML += `array.indexOf('메론') : ${array.indexOf('메론')}<br>`; //1
        div2.innerHTML += `array.indexOf('복숭아') : ${array.indexOf('복숭아')}<br>`; //값이 없을땐 -1*/

        //2) concat() : 원본 배열의 마지막 요소에 배열이나 값을 추가한다.(원본 배열은 변경되지 않는다.)
        /*let array1 = ['체리','메론','수박','귤','딸기'];
        let array2 = ['바나나', '오렌지', '두리안','망고'];

        div2.innerHTML = `array1: [${array1}]<br>`;
        div2.innerHTML += `array2: [${array2}]<br>`;
        div2.innerHTML += `array1.concat(array2): [${array1.concat(array2)}]<br>`; //두개의 array를 합친 새로운 array 생성
        div2.innerHTML += `array1: [${array1}]<br>`; // 원본 배열에 영향을 미치지 않는다.
        div2.innerHTML += `array2.concat(array1): [${array2.concat(array1)}]<br>`; //두개의 array를 합친 새로운 array 생성
        div2.innerHTML += `array2: [${array2}]<br>`;
        //[...array1, ...array2]*/

        //3) sort() : 원본 배열의 요소를 정렬한다. (오름차순)
        /*let array1 = ['Apple','Cherry','apple','Banana'];
        let array2 = [ 10, 543, 30, 450, 123, 4885];
        div2.innerHTML = `array1: [${array1}]<br>`;
        div2.innerHTML += `array2: [${array2}]<br>`;
        div2.innerHTML += `array1.sort(): [${array1.sort()}]<br>`;
        div2.innerHTML += `array2.sort(): [${array2.sort()}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array1: [${array1}]<br>`;
        div2.innerHTML += `array2: [${array2}]<br>`;

        //array2 오름차순 정렬
        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        // 비교하는 값이 같으면 0을 리턴한다.
        // 첫 번째 매개값이 크면 양수를 리턴한다.
        // 두 번쨰 매개값이 크면 음수를 리턴한다.
        /*array2.sort(function(left,right) { 
            return left - right;//오름차순
            // return right - left;//내림차순
        });*/

        //참고
        // array2.sort((left,right) => left - right);

        // div2.innerHTML += `array2: [${array2}]<br>`;

        //4) reverse() : 원본 배열의 순서를 반대로 변경한다.
        /*let array = [8, 5, 3, 6, 1, 4];

        div2.innerHTML = `array: [${array}]<br>`;
        div2.innerHTML += `array.reverse(): [${array.reverse()}]<br>`;
        div2.innerHTML = `array: [${array}]<br><br>`;

        let array1 = ['Apple','Cherry','apple','Banana'];
        div2.innerHTML += `array1.sort().reverse(): [${array1.sort().reverse()}]<br>`;*/

        //5) push() : 배열의 뒤에 요소를 추가한다., pop() : 배열의 마지막 요소를 제거하고 제거한 요소를 반환한다.
        /*let array = ['HOT', '핑클', 'SES', '양요섭'];
        div2.innerHTML = `array: [${array}]<br>`;
        //push 후 요소의 개수를 리턴한다.
        div2.innerHTML += `array.push(): [${array.push('신화')}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array: [${array}]<br><br>`;

        div2.innerHTML += `array.pop(): [${array.pop()}]<br>`; //마지막 요소를 제거하고, 제거한 요소만 리턴.
        div2.innerHTML += `array: [${array}]<br><br>`;
        div2.innerHTML += `array.pop(): [${array.pop()}]<br>`;
        div2.innerHTML += `array: [${array}]<br><br>`;*/

        //6) unshift(): 배열의 앞에 요소를 추가한다./ shift() : 배열의 첫 번째 요소를 제거하고 제거한 요소를 반환한다.
        /*let array = ['HOT', '핑클', 'SES', '양요섭'];

        div2.innerHTML = `array: [${array}]<br>`;
        //unshitft 후 요소의 개수를 리턴한다.
        div2.innerHTML += `array.unshift(): [${array.unshift('젝스키스')}]<br>`;
        //원본 배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array: [${array}]<br><br>`;

        //배여르이 맨 앞 요소를 제거한 후 반환한다.
        div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        //원본배열에 영향을 미치는 메소드이다.
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        div2.innerHTML += `array: [${array}]<br>`;*/

        //7) slice(): 배열의 요소를 잘라낸 새로운 배열을 반환한다. , splice():배열의 특정 인덱스에 요소를 추가/삭제할 수 있다.
        /*let array = ['HOT', '핑클', 'SES', '양요섭', '신화'];

        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.slice(2): [${array.slice(2)}]<br>`;
        //원본 배열에 영향을 미치지 않는 메소드이다.
        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.slice(2,3): [${array.slice(2,3)}]<br>`;
        div2.innerHTML += `array: [${array}]<br><br>`;
        
        div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.splice(2): [${array.splice(2)}]<br>`;
        // 2번 인덱스부터 잘라서 새로운 배열을 만든다.
        // div2.innerHTML += `array.splice(2,2): [${array.splice(2,2)}]<br>`;
        // 2번 인덱스에서 2개를 자르겠다! 
        // div2.innerHTML += `array.splice(2,2,'젝스키스'): [${array.splice(2,2,'젝스키스')}]<br>`;
        // 2번 인덱스에서 2개를 자르고 , 자른 곳에 '젝스키스'를 넣겠다! 
        div2.innerHTML += `array.splice(1,0,'젝스키스','BTS'): [${array.splice(1,0,'젝스키스','BTS')}]<br>`;
        // 1번 인덱스에서 0개를 자르고, 1번 인덱스에다가 '젝스키스','BTS'를 넣는다.
        div2.innerHTML += `array: [${array}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.*/

        // 8) toString(): 배열을 문자열로 반환한다., join() : 배열의 요소를 특정 구분자로 연결한 문자열로 변환 후 반환한다.
        /*let array = ['HOT', '핑클', 'SES', '양요섭', '신화'];

        div2.innerHTML += `array: [${array}]<br>`;
        div2.innerHTML += `array.toString(): [${array.toString()}]<br>`;
        div2.innerHTML += `array.join(): [${array.join()}]<br>`;
        div2.innerHTML += `array.join('|'): [${array.join('|')}]<br>`; // , 에서 | 로 변경*/

        // 9) forEach() : 요소 1개씩 가져오는 반복문을 사용하지 않고도 반복문 처리 가능.
        /*let array = ['HOT', '핑클', 'SES', '양요섭', '신화'];

        array.forEach(function(value, index, array){
            // div2.innerHTML += `value: ${value},  index ${index}<br>`;
            div2.innerHTML += `array[${index}] :${array[index]} <br>`;
        });*/

        //10) reduce()
        // 배열의 각 요소에 대해 콜백 함수의 실행 값을 누적하여 하나의 결과값을 반환한다.
        let array = [3,5,7,9];

        let result = array.reduce(function(left, right){
            // return left + right;
            return left * right;
        });

        div2.innerHTML = `result : ${result}`;

        //Spread 연산자 (ES6부터 추가)
        // 배열 병함(concat 메소드와 같은 역할)
        // let arr1 = [1,2,3];
        // let arr2 = [8,9,10];
        // let arr3 = [...arr1, ...arr2]; //[1,2,3,8,9,10]
        // console.log(arr1,arr2, arr3);

        //배열 복사
        // let arr1 = [1,2,3];
        // let arr2 = [...arr1]; //[1,2,3]
        // let arr3 = [...arr1,4,6,8]; //[1,2,3,4,6,8]
        // console.log(arr1,arr2, arr3);

    };
};