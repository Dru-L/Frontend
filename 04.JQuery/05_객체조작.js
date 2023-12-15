$(document).ready(() => {
    //1. Content 설정
    //1) html()
    $('#content2').html($('#content1').html());
    $('#content1>a').attr('href','https://www.naver.com');
    $('#content2').find('a').prop('href','https://www.naver.com');

    //$('.content').html(); //조회할때는 첫번째 것만 조회
    //$('.content').html('ㅋㅋㅋ'); //수정은 다같이 수정됨

    $('.content').html((index,content)=>{
        console.log(index, content);

        return `<h1>인덱스 : ${index}, 내용: ${content}</h1>`;
    });

    // 2) text()메소드
    // $('#content4').text($('#content3').text());
    $('#content4').text($('#content3').html());

    //$('.content2').text()
    //$('.content2').text('ㅎㅎㅎ')//단순하게 텍스트만 입력할거면 text. 그러나,태그은 인식 안됨.

    $('.content2').text((index, content)=>{
        console.log(index,content);

        return `<h1>인덱스 : ${index}, 내용: ${content}</h1>`; //변경은 되지만 태그로 인식되지 않고 문자열로 출력
    });


    //2.요소 추가
    //1)요소 생성
    let p1 = $('<p>').text('제이쿼리로 요소 생성1');
    let p2 = $('<p>제이쿼리로 요소 생성2</p>');

    $('#div1').append(p1);
    $('#div1').append(p2);
    // $('#div1').html('<p>제이쿼리로 요소 생성3</p>');
    $('#div1').append('<p>제이쿼리로 요소 생성3</p>');

    //2) 요소 추가 1
    // $(A).append(B) : B요소를 A요소의 자식 요소로 뒷부분에 추가한다.
    $('#add1').append('<span>B</span>');

    //$(A).prepend(B) : B요소를 A요소의 자식 요소로 앞부분에 추가한다.
    $('#add2').prepend('<span>B</span>');

    //$(A).after(B) : B요소를 A요소의 형제 요소로 뒷부분에 추가한다.
    $('#add3').after('<span>B</span>');

    //$(A).before(B) : B요소를 A요소의 형제 요소로 앞부분에 추가한다.
    $('#add4').before('<span>B</span>');
    
    //3) 요소 추가 2
    // $(A).appendTo(B) : A요소를 B요소의 자식 요소로 뒷부분에 추가한다.
    $('<span>B</span>').appendTo('#add5');
    // $('<span>B</span>').appendTo($('#add5'));

    //$(A).prependTo(B) : A요소를 B요소의 자식 요소로 앞부분에 추가한다.
    $('<span>B</span>').prependTo('#add6');

    //$(A).insertAfter(B) : A요소를 B요소의 형제 요소로 뒷부분에 추가한다.
    $('<span>B</span>').insertAfter('#add7');

    //$(A).insertBefore(B) : A요소를 B요소의 형제 요소로 앞부분에 추가한다.
    $('<span>B</span>').insertBefore('#add8');


    //3.요소 복제
    // 1) 복제할 요소에 이벤트 핸들러 추가
    // $('#item1').hover(
    //     (event) => $(event.target).addClass('bg-hotpink') ,
    //     (event) => $(event.target).removeClass('bg-hotpink')
    // );

    // 위의 내용을 toggleClass를 이용하여 한줄로 축약할 수 있다.
    $('#item1').hover((event) => $(event.target).toggleClass('bg-hotpink'));

    //2) 버튼 클릭 시 요소를 복제
    $('#btnClone').click(() => {
        // let item1 = $('#item1').clone();
        let item1 = $('#item1').clone(true); //true를 통해 이벤트 핸들러까지 같이 복사

        console.log(item1);

        $('#cloneResult').append(item1);
    });


    //4. 요소 삭제
    //1) 삭제할 요소에 이벤트 핸들러 추가
    $('#item2').hover(
        (event) => $(event.target).toggleClass('bg-hotpink')
    );
    
    //2) remove 테스트
    $('#btnRemove').click(() => {
        let item2 = $('#item2').remove(); //요소를 제거후, 제거된 요소를 리턴. 리턴되는 요소의 이벤트까지 삭제

        console.log(item2);

        $('#removeResult').append(item2);
    });

    //3) detach 테스트
    $('#btnDetach').click(() => {
        let item2 = $('#item2').detach(); //요소를 제거후, 제거된 요소를 리턴. 리턴되는 요소의 이벤트는 삭제 안함.

        console.log(item2);

        $('#removeResult').append(item2);
    });

    //4) empty 테스트
    $('#btnEmpty').click(() => {
        $('#removeResult').empty();
    });


    //5. 배열 관리
    $('#eachTest>h4').each((index, element) => { //각 인덱스와 요소를 추출하라
        console.log(index,element);

        $(element).addClass('bg-hotpink');
    });
});