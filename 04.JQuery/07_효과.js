$(document).ready(()=>{
    //1. show(), hide(), toggle()
    $('#btnShow').on('click',() => {
        // $('#img1').show();
        // $('#img1').show(1000);
        $('#img1').show(1500, 'swing'); //swing: 끝에가 속도가 조금 빠름.
    });

    $('#btnHide').on('click',()=>{
        // $('#img1').hide(); 
        // $('#img1').hide(1000); //1초 = 1000;
        $('#img1').hide(1500, 'linear'); //linear : 일정한 속도로 사라짐
        // $('#img1').hide(1500, 'linear', () => {
        //     alert('이미지가 사라짐'); //콜백 함수가 hide 이후에 나타남.
        // });
    });

    $('#btnToggle').on('click',() => {
        // $('#img1').toggle();
        $('#img1').toggle(1000, 'swing');
    });


    //2. slideDown(), slideUp(), slideToggle()
    $('.menu').on('click',(event) =>{
        let content = $(event.target).next();
        // content.slideDown();
        // content.slideDown(500, 'swing');

        // if(content.css('display')==='none'){
        //     content.slideDown(500, 'swing');
        // }else{
        //     content.slideUp(500, 'swing');
        // }

        content.slideToggle(500, 'swing');
    });

    // 3. fadeIn(), fadeOut(), fadeToggle(), fadeTo()
    $('#btnFadeIn').on('click', () => {
        // $('#img2').fadeIn();
        // $('#img2').fadeIn(1000);
        $('#img2').fadeIn(1000,'swing');
    });

    $('#btnFadeOut').on('click', () => {
        // $('#img2').fadeOut();
        // $('#img2').fadeOut(1000);
        $('#img2').fadeOut(1000,'swing');
    });

    $('#btnFadeToggle').on('click',() => {
        $('#img2').fadeToggle(1000,'swing');
    });

    $('#img2').hover((event) => {
        if(event.type === 'mouseenter'){
            $(event.target).fadeTo(500,.5,'linear'); // 가운데 .5 는 투명도. 1: 불투명. 0:완전 투명
        }else{
            $(event.target).fadeTo(500,1,'swing');
        }
    });
});