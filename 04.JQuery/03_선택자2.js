$(document).ready(()=>{
    //4. 자손, 후손 선택자
    //1) 자손 선택자
    //   부모>자식
    $('div>h3').css('color', 'violet');
    $('div>ul>li>h3').css('color', 'blue');

    //2)후손 선택자
    //  부모(상위) 후손
    $('div h3').css('background-color','#fcffd1');
    $('div h3').html('<i>h3값 변경<i>')
    $('div .child').css('background-color', '#a9ffdb');


    //5. 속성 선택자
    $('#div1 input[class]').css('background-color', 'pink');
    $('#div1 input[type=text]').val('임의의 값 설정');
    $('#div1 input[class~=test1]').val('1234567');// ~= 'test1'이 클래스가 test1, test2가 같이 들어있으므로 test1만 선택할수있게 해준다.
    $('#div1 input[type^=ra]').prop('checked', true); //ra로 시작하는 타입의 속성을 변경(체크표시 되어있도록)
    $('#div1 input[type$=box]').prop('checked', true); //box로 끝나는 타입의 속성을 변경 (체크표시 되어있도록)
    $('#div1 input[class*=st3]').css('width','100px').css('height','100px');//st3라는 워딩이 포함이 어디든 되어있으면 속성 변경.

    //6.입력 양식 선택자
    $('#div2 input:text').css('background-color', 'pink');
    $('#div2 input:button').css({width:'50px', height:'50px'}).val('버튼');
    $('#div2 input:checkbox').prop('checked', true).css({width: '20px',height:'20px'});
    $('#div2 input:file').css('backgroundColor','yellow');

    //mouseenter(): 마우스가 요소 내부로 들어왔을 때 발생하는 이벤트를 처리할 핸들러를 등록하는 메소드이다.
    $('#div2 input:image').mouseenter((event)=>{
        console.log(event.target);
        console.log($(event.target));

        // event.target.src='../resources/image/flower2.PNG';
        $(event.target).prop('src','../resources/image/flower3.PNG');
    })

    //mouseout() : 마우스가 요소 외부로 나갔을 때 발생하는 이벤트를 처리할 핸드럴를 등록하는 메소드이다.
    $('#div2 input:image').mouseout((event) => $(event.target).attr('src','../resources/image/flower1.PNG'));


    // 7.입력 양식 상태에 대한 선택자
    $('#div3 input:enabled').css('background-color', 'yellow');
    $('#div3 input:disabled').css('background-color', 'pink');
    $('#div3 input:checked').css({width:'30px',height:'30px'});

    //change(): checkbox,radio 요소들의 상태가 변경될 때 발생하는 이벤트를 처리할 핸들러를 등록하는 메소드이다.
    // $('#div3 input:checkbox').change((event)=>{
    $('#div3 input[type=checkbox]').change((event)=>{
        let checkbox = $(event.target);

        if(checkbox.prop('checked')){
            checkbox.css({width:'30px', height:'30px'});
        } else {
            checkbox.css({width:'13px', height:'13px'});
        }
    });

    $('#result').val($('#national').val());

    $('#national').change((event) => {
        //select 태그의 option 태그 중 선택된 요소의 value 값을 읽어온다.
        // let value = $(event.target).val();
        let value = $('#national>option:selected').val();

        console.log(value);

        // id가 result인 요소에 값을 value로 변경
        $('#result').val(value);
    })

    //8. attr(), prop()
    // $('#cb1').attr('checked');
    // $('#cb2').attr('checked');
    // $('#cb2').attr('checked', 'checked'); //체크를 하는 동작
    // $('#cb2').attr('checked', null); //체크를 푸는 동작

    // $('#cb1').prop('checked');
    // $('#cb2').prop('checked');
    // $('#cb2').prop('checked', true);
    // $('#cb2').prop('checked', false);

});