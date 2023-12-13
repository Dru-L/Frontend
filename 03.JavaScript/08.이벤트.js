//5) 기본 이벤트 제거2
function passwordCheck(){
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');

    if(pass1.value!== pass2.value) { //value = 값
        alert('비밀번호가 일치하지 않습니다.')

        pass1.value = '';
        pass2.value = ''; //value 속성의 값을 빈문자로 바꿔서 윈도우창에 입력되어 있는 값을 없애기
        pass1.focus();

        return false;
    }
    alert('저장되었습니다');
    return true;
    
};



window.onload = () => {
    //2) 프로퍼티 방식
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function(event){
        console.log(event);
        console.log(event.target);
        console.log(this); //요소 객체를 가리킨다.
    };

    btn1.onclick = (event) =>{
        console.log(event);
        console.log(event.target);
        console.log(this); //window 객체를 가리킨다.

        // 이벤트 핸드러 제거 (딱 한번만 실행하게 한다.)
        btn1.onclick = null; 
    };


    //3) 메소드 방식
    let btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        console.log(this); //요소 객체를 가리킨다.
    });

    btn2.addEventListener('click', (event) => {
        console.log('---------------------------');
        console.log(event);
        console.log(event.target);
        console.log(this); //window 객체를 가리킨다.
    });

    function clickEventTest(){
        console.log('------------------');
        console.log('clickEventTest() - 호출');
    }

    btn2.addEventListener('click', clickEventTest); //선언되어 있는 함수를 넘겨줄 수 도있다.
    btn2.removeEventListener('click', clickEventTest); // 이벤트 삭제

    //5) 기본 이벤트 제거2
    let btnSubmit = document.getElementById('btnSubmit');

    // btnSubmit.onclick = () => {
    //     let pass1 = document.getElementById('pass1');
    //     let pass2 = document.getElementById('pass2');
    //     // 사용자가 입력한 값을 가져오려면 value 붙여줘야한다! 
    
    //     if (pass1.value !== pass2.value){
    //         alert('비밀번호가 일치하지 않습니다.');
    
    //         pass1.value = '';    
    //         pass2.value = '';
    //         pass1.focus();
    
    //         return false;
    
    //     }   
    //     return true;
    // };

    btnSubmit.addEventListener('click', (event) => {
        let pass1 = document.getElementById('pass1');
        let pass2 = document.getElementById('pass2');
        // 사용자가 입력한 값을 가져오려면 value 붙여줘야한다! 
    
        if (pass1.value !== pass2.value){
            alert('비밀번호가 일치하지 않습니다.');
    
            pass1.value = '';    
            pass2.value = '';
            pass1.focus();

            // 메소드 방식에서는 아래와 같이 기본 이벤트를 제거해야한다.
            event.preventDefault(); //기본 이벤트 제거
        }   
    });

    
    // 6) 기본 이벤트 제거 3
    let btnSubmit2 = document.getElementById('btnSubmit2');

    btnSubmit2.addEventListener('click', (event) => {
        let userId = document.getElementById('userId').value;
        let regExp = /^[a-zA-Z0-9]{5,12}$/;

        console.log(userId);

        if (!regExp.test(userId)){
            alert('아이디를 정상적으로 입력해 주세요.')
            event.preventDefault();
        }
    });
};