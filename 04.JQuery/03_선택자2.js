$(document).ready(()=>{
    //4. 자손, 후손 선택자
    //1) 자손 선택자
    //   부모>자식
    $('div>h3').css('color', 'violet');
    $('div>ul>li>h3').css('color', 'blue');

    //2)후손 선택자
    //  부모(상위) 후손
    $('div h3').css('background-color','#fcffd1');
    $('div .child').css('background-color', '#a9ffdb');
});