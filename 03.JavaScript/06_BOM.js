window.onload = function(){
    // 1. window 객체
    // 1) window.open()
    let btn1 = document.getElementById('btn1');
    
    btn1.addEventListener('click', () => {
        // window.open('URL','창이름','특성')
        // window.open();//새탭
        //window.open('https://www.naver.com');
        //window.open('https://www.naver.com', 'naver'); //이름으로 창을 구분한다.
    
        //특성의 경우 브라우저마다 다르게 동작하기 때문에
        //정상적으로 동작하는지는 꼭 확인해야한다.
        window.open('https://www.naver.com', 'naver', 'width=500px,height=500px'); 
    });


    //2) 타이머(Timer)
    // window.setTimeout()
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () =>{
        let newWindow = window.open();

        newWindow.alert('이 페이지는 3초 후에 종료됩니다.');
        // newWindow.close();
        //일정 시간 후에 콜백 함수를 한 번 실행한다.
        let timerId = window.setTimeout(() => newWindow.close(), 3000);

        //타이머 ID를 clearTimerout()에 전달하면 해당 ID의 타이머를 취소할 수 있다.
        window.clearTimeout(timerId);

        // 새 창에서 부모 창에 접근하는 방법
        // let opener = window.opener;
        // let h2 = opener.document.getElementByTagName('h2')[0];
        // h2.innerHTML = '새 창에서 값을 변경';
    });


    //3) window.setInterval()
    let timerId = 0; //타이머ID 지정
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');

    btnStart.addEventListener('click', () => {
        let div1 = document.getElementById('div1');

        // 일정 시간마다 콜백 함수를 반복 실행한다.
        timerId = window.setInterval( () => {
            let now = new Date();
    
            div1.innerHTML = `${now.getHours()} : ${now.getMinutes()} : <span id ="second">${now.getSeconds()}</span>`;
        }, 1000);
    });

    btnStop.addEventListener('click', () => {
        //타이머 ID를 전달하면 해당 ID의 타이머를 취소할 수 있다.
        window.clearInterval(timerId);
    });
}


