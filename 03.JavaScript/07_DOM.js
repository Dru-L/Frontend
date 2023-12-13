window.onload = function () {
    // 1. 노드 생성
    // 1) 텍스트 노트가 있는 요소 노드 생성
    let btn1 = document.getElementById('btn1');

    btn1.addEventListener('click', () => {
        //요소 노드 생성
        let title = document.createElement('h3');
        // console.log(title);

        //텍스트 노드 생성
        let textNode = document.createTextNode('안녕하세요');

        title.appendChild(textNode);
        
        document.getElementById('div1').appendChild(title);
        // document.getElementById('div1').innerHTML+='<h3>안녕하세요</h3>';
    });

    // 2) 텍스트 노드가 없는 요소 노드 생성
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click', () => {
        let img = document.createElement('img');

        img.setAttribute('src', '../resources/image/flower1.png');
        img.setAttribute('width', '150px');
        img.setAttribute('height', '100px');

        console.log(img);

        document.getElementById('div2').appendChild(img);
        // document.getElementById('div2').innerHTML+='<img src="../resources/image/flower1.png" width="150px" height="100px">';
    });


    //2. 노드 삭제
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click', () =>{
        document.getElementById('div3').remove();
        document.body.removeChild(document.getElementById('div2')); // 다른 위치에 있는 div 삭제
    });
}