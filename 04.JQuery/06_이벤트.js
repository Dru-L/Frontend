$(document).ready(() => {
    // 1. 이벤트 연결
    // 1) on(), off()
    /*
    $('#div1').on('mouseenter', (event) => {
        let element = event.target;

        element.style.backgroundColor = 'green';
        element.style.color = 'white';
        element.innerText = '마우스 올라감';
    });

    $('#div1').on('mouseleave', (event)=> {
        $(event.target).css({backgroundColor:'red', color:'white'})
        .text('마우스 내려감');
    });

    $('#div1').on('click', (event) =>{
        $(event.target).css({backgroundColor:'#fff', color:'#000'})
        .text('')
        // .off('mouseenter') // 이벤트를 끈다(제거).
        // .off('mouseleave')// 이벤트를 끈다(제거).
        // .off('click'); //이벤트를 끈다(제거).
        .off('mouseenter mouseleave click'); //이벤트 제거를 한번에 할 수 있다. (각 이벤트끼리 공백으로 분리)
    });
    */

    /*
    // 위의 코드를 if문을 이용하여 코드 줄이기
    $('#div1').on('mouseenter mouseleave click', (event) => { //세가지를 공백으로 구분.
        console.log(event.type);

        if(event.type === 'mouseenter'){
            $(event.target).css({backgroundColor:'green', color:'white'})
            .text('마우스 올라감');
        }else if(event.type === 'mouseleave'){
            $(event.target).css({backgroundColor:'red', color:'white'})
            .text('마우스 내려감');
        }else if(event.type === 'click'){
            $(event.target).css({backgroundColor:'#fff', color:'#000'})
            .text('')
            .off('mouseenter mouseleave click');
        }
    });
    */
    
    // 위 코드를 자바스크립트 객체 형태로 바꿔서 넘겨주는방법(코드의 복잡함 최소화)
    $('#div1').on({ //이벤트 종류를 속성명으로 주고, 실제로 일어날 값을 콜백함수로 넘겨주면됨.
        mouseenter: (event) => {
            $(event.target).css({backgroundColor:'green', color:'white'})
            .text('마우스 올라감');
        },
        mouseleave: (event) => {
            $(event.target).css({backgroundColor:'red', color:'white'})
            .text('마우스 내려감');
        },
        click: (event) => {
            $(event.target).css({backgroundColor:'#fff', color:'#000'})
            .text('')
            .off('mouseenter mouseleave click');
        }
    });


    // 2) one() : 이벤트들이 한 번씩만 동작함
    $('#div2').one('mouseenter mouseleave click', (event) => {
        if(event.type === 'mouseenter'){
            $(event.target).css({backgroundColor:'green', color:'white'})
            .text('마우스 올라감');
        }else if(event.type === 'mouseleave'){
            $(event.target).css({backgroundColor:'red', color:'white'})
            .text('마우스 내려감');
        }else if(event.type === 'click'){
            $(event.target).css({backgroundColor:'#fff', color:'#000'})
            .text('처음이자 마지막으로 이벤트 핸들러 실행');
        }
    });


    // 2. 키보드 이벤트
    // 1) keyup, keydown, keypress
    // 키보드 눌려질 때
    $('#textarea1').keydown((event)=>{
        console.log(`keydown: ${event.key}, ${event.keyCode}`); //한글 등 모든키는 keydown 발생
    });

    // 글자가 입력될 떄 (한글, 기능키, function키 사용못함)
    $('#textarea1').keypress((event)=>{
        console.log(`keypress: ${event.key}, ${event.keyCode}`); //ASCII 코드로 영문자와 숫자 만 가능
    });

    // 키보드가 떼어질 때
    $('#textarea1').keyup((event)=>{
        console.log(`keyup: ${event.key}, ${event.keyCode}`);
    });

    // 2) 동적으로 글자 수 세기
    $('#textarea2').on('keyup', (event) => {
        // console.log(event.target.value.length);
        let target = $(event.target);
        let currentLength = target.val().length;
        let maxLength= parseInt($('#maxLength').text());

        console.log(currentLength, maxLength);

        if(currentLength > maxLength){
            target.val(target.val().substr(0, maxLength));
        }else{
            $('#currentLength').text(currentLength);
        }
    });

    //3) 동적으로 아이디 조건 확인
    $('#userId').keyup((event)=>{
        let userId = event.target.value;
        let regExp = /^[a-z][a-z0-9]{3,11}$/;

        console.log(userId);

        if (userId === null || userId ===''){
            $('#idCheck').text('');
        } else if(regExp.test(userId)){
            $('#idCheck').text('사용 가능한 아이디 입니다.')
            .css({color:'green', fontWeight:'bold'});
        } else {
            $('#idCheck').text('사용 불가능한 아이디 입니다.')
            .css({color:'red', fontWeight:'bold'});
        }
    });


    // 3. trigger() 메소드
    // $('#div3').on('click', (event) => {
    //     if($('#div3').hasClass('bg-hotpink')){
    //         $(event.target).removeClass('bg-hotpink');
    //     }else{
    //         $(event.target).addClass('bg-hotpink');
    //     }
    // });
    $('#div3').on('click', (event) => $(event.target).toggleClass('bg-hotpink'));

    $('#btn1').click(()=>{
        $('#div3').trigger('click'); //이벤트를 강제로 발생
    });
});