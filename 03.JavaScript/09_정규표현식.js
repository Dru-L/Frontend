window.onload = function () {
    // 1. 정규 표현식 객체 생성
    let btn1 = document.getElementById('btn1');
    
    btn1.addEventListener('click',()=> {
        let str1 = 'javascript jqueryscript ajax';
        let str2 = 'java jquery ajax';
        // 생성자 함수를 이용한 정규 표현식 객체 생성
        let regExp1 = new RegExp('script'); // 생성자의 매개값으로 패턴을 문자열로 지정한다.
        // 리터럴을 이용한 정규 표현식 객체 생성
        let regExp2 = /script/; // 패턴 양쪽에 /로 작성한다. (시작기호, 종료기호)

        let div1 = document.getElementById('div1');

        console.log(regExp1, typeof(regExp1),regExp1 instanceof RegExp);
        console.log(regExp2, typeof(regExp2),regExp2 instanceof RegExp);//동일한 패턴을 가진 객체인게 확인된다.

        div1.innerHTML = '<h4>RegExp 객체에서 제공하는 메소드</h4>';
        // test('문자열')
        //매개값으로 전달되는 문자열에서 정규 표현식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다.
        div1.innerHTML += `regExp1.test(str1) : ${regExp1.test(str1)}<br>`
        div1.innerHTML += `regExp2.test(str2) : ${regExp1.test(str2)}<br>`

        // exec('문자열')
        // 매개값으로 전달되는 문자열에서 정규 표현식 패턴을 만족하는 값을 리턴한다.(없으면 null 리턴)
        div1.innerHTML += `regExp1.exec(str1) : ${regExp1.exec(str1)}<br>`
        div1.innerHTML += `regExp1.exec(str2) : ${regExp1.exec(str2)}<br>`

        div1.innerHTML += '<h4>문자열에서 정규 표현식 객체를 이용하는 메소드</h4>';
        //match(정규표현식)
        // 문자열에서 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 리턴한다.(없으면 null 리턴)
        div1.innerHTML += `str1.match(regExp1) : ${str1.match(regExp1)}<br>`;
        div1.innerHTML += `str2.match(regExp1) : ${str2.match(regExp1)}<br>`;

        //search(정규표현식)
        //문자열에서 매개값으로 전달되는 정규 표현식 패턴을 만족하는 부분의 시작 인덱스를 리턴한다.(없으면 -1 리턴)
        div1.innerHTML += `str1.search(regExp1) : ${str1.search(regExp1)}<br>`;
        div1.innerHTML += `str2.search(regExp1) : ${str2.search(regExp1)}<br>`; // 값이 없으면 -1
        
        //split(정규표현식)
        //문자열에서 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 구분자로 하여 배열을 생성하고 리턴한다.
        div1.innerHTML += `str1.split(regExp1) : ${str1.split(regExp1)}<br>`;
        div1.innerHTML += `str2.split(regExp1) : ${str2.split(regExp1)}<br>`;

        //replace(정규표현식)
        //문자열에서 매개값으로 전달되는 정규 표현식 패턴을 만족하는 값을 '변경할 값'으로 변경한다.
        div1.innerHTML += `str1.replace(regExp1) : ${str1.replace(regExp1, '스크립트')}<br>`; //첫번째 매개값을 변경
        div1.innerHTML += `str2.replace(regExp1) : ${str2.replace(regExp1, '스크립트')}<br>`;
    });

    //2. 플래그 문자
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let str = 'JAvaScript jQuery Ajax';
        let div2 = document.getElementById('div2');

        div2.innerHTML = '<h4>플래그 문자</h4>'
        //replace()에서 $&는 패턴을 만족하는 문자열을 의미한다.
        div2.innerHTML += `/a/ : ${str.replace(/a/, '($&)')}<br>`;  //($&) : 정규표현식을 만족하는 문자에 ()를 감싼다.
        // g: 전역으로 비교를 수행한다.
        div2.innerHTML += `/a/g : ${str.replace(/a/g, '($&)')}<br>`;  // /a/g : g => global의 약자.소문자 a를 전체 찾아서 바꿔줌.
        // i : 대소문자를 구분하지 않고 비교를 수행한다.
        div2.innerHTML += `/a/i : ${str.replace(/a/i, '($&)')}<br>`; 
        //순서와 상관없이 하나 이상의 플래그 문자를 동시에 설정할 수 있다.
        div2.innerHTML += `/a/ig : ${str.replace(/a/ig, '($&)')}<br>`; 
        div2.innerHTML += `/a/gi : ${str.replace(/a/gi, '($&)')}<br>`; 
    });

    //3. 메타 문자
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click',() => {
        let str = 'a aa aaa aaaa';
        let div3 = document.getElementById('div3');

        div3.innerHTML = '<h4>메타 문자</h4>'

        //반복 검색
        div3.innerHTML += '<h5>반복 검색</h5>'
        // {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{1,2}/g : ${str.replace(/a{1,2}/g, '($&)')}<br>`
        div3.innerHTML += `/a{3}/g : ${str.replace(/a{3}/g, '($&)')}<br>` //{3,3} 쓴 것과 동일
        //앞선 패턴이 최소 2번 이상 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a{2,}/g : ${str.replace(/a{2,}/g, '($&)')}<br>`
        //+는 앞선 패턴이 최소 1번 이상 반복되는 문자열을 의미한다.
        div3.innerHTML += `/a+/g : ${str.replace(/a+/g, '($&)')}<br>`
        // ?는 앞선 패턴이 최대 한번 이상 반복되는 문자열을 의미한다.{0,1}
        div3.innerHTML += `/a?/g : ${str.replace(/a?/g, '($&)')}<br>`

        //문자열의 앞,뒤 구분
        //^는 문자열의 시작을 의미한다.
        //$는 문자열의 마지막을 의미한다.
        str = 'Javascript\nJquery\nShellscript\nAjax';

        div3.innerHTML += '<h5>문자열의 앞, 뒤 구분</h5>';
        div3.innerHTML += `/^j/g : ${str.replace(/^j/g, '($&)')}<br>`; //j로 시작하는 애들만 찾음.
        div3.innerHTML += `/^j/ig : ${str.replace(/^j/ig, '($&)')}<br>`;
        div3.innerHTML += `/^j/igm : ${str.replace(/^j/igm, '($&)')}<br>`; //j, J로 시작하는 애들만 찾음
        div3.innerHTML += `/ipt$/igm : ${str.replace(/ipt$/igm, '($&)')}<br>`; //ipt로 끝나는 애들만 찾음.

        //OR 검색
        str = '123 Javascript Jquery Ajax';

        div3.innerHTML += '<h5>OR 검색</h5>';
        // [...] 내의 문자들 중 하나라도 존재할 경우를 의미한다.
        div3.innerHTML += `/[aj]/gi : ${str.replace(/[aj]/gi, '($&)')}<br>`;
        // [... ] 내의 ^는 not의 의미를 가진다.
        div3.innerHTML += `/[^aj]/gi : ${str.replace(/[^aj]/gi, '($&)')}<br>`; //j와 a를 제외한 모든곳에 () 표시 <=공백까지도
        div3.innerHTML += `/[a-z]/g : ${str.replace(/[a-z]/g, '($&)')}<br>`; //a-z까지 전체란 의미
        div3.innerHTML += `/[A-Z]/g : ${str.replace(/[A-Z]/g, '($&)')}<br>`; //A-Z까지 전체란 의미
        div3.innerHTML += `/[0-9]/g : ${str.replace(/[0-9]/g, '($&)')}<br>`; //0-9까지 전체란 의미
        div3.innerHTML += `/[A-Z0-9]/g : ${str.replace(/[A-Z0-9]/g, '($&)')}<br>`; //A-Z, 0-9까지 전체란 의미

        //문자 클래스
        div3.innerHTML += '<h5>문자 클래스</h5>';
        // .은 임의의 문자 한 개를 의미하고, 문자 내용은 무엇이든 상관없다.
        div3.innerHTML += `/.../g : ${str.replace(/.../g, '($&)')}<br>`;

        str = 'A1 B2 C3 d_4 e:5 ` ffgg77--__-- \t가\t나\n다';

        // \d는 숫자를 의미한다. ([0-9])
        div3.innerHTML += `/\\d/g : ${str.replace(/\d/g, '($&)')}<br>`; // \\: \를 문자로 출력
        // \D는 숫자가 아닌 모든 문자들을 의미한다. (공백 포함) ([^0-9])
        div3.innerHTML += `/\\D/g : ${str.replace(/\D/g, '($&)')}<br>`;
        // \w는 알파벳 대/소문자, 숫자, 언더바(_)를 의미한다. ([A-Za-z0-9_])
        div3.innerHTML += `/\\w/g : ${str.replace(/\w/g, '($&)')}<br>`; 
        // \W는 알파벳 대/소문자, 숫자, 언더바(_)가 아닌 문자를 의미한다. ([^A-Za-z0-9_])
        div3.innerHTML += `/\\W/g : ${str.replace(/\W/g, '($&)')}<br>`; 
        // \s는 공백 문자를 의미한다. ([ \t\n])
        div3.innerHTML += `/\\s/g : ${str.replace(/\s/g, '($&)')}<br>`; 
        // \s는 공백 문자가 아닌 문자를 의미한다. ([^ \t\n])
        div3.innerHTML += `/\\S/g : ${str.replace(/\S/g, '($&)')}<br>`;

    });


}