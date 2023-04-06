

// 이미 누군가, Object 를 쓸 수 있는 생성자 함수를 만들어 둔건가? 
// 그리고, 그 Object 안에 assign 이라는 메소드가 있는건가?❓❓❓❓❓❓❓❓❓❓❓ 
// function Object () {
//     this.assign = function() {

//     }
// }
    // 😥 이걸 지금 뭐라고 불러야 할지 모르겠음. 




function Drawer(elem, open = false) {

    this.elem = elem;
    this.isOpen = open;

    // 이 순간, Object 는? 이미 Object객체, assign 메소드는 정의되어 있는건가?
    Object.assign(this.elem.style, {
        display : "block", 
        position : "fixed", 
        top : 0, 
        bottom : 0, 
        right : 0, 
        width : "500px", 
        padding : "10px", 
        backgroundColor : "yellow", 
            // 변수명으로 쓸 때, background-color 라고 쓰지 않고, Color 로 쓴다. 
        transition : "1s"
            // 1초 동안 원하는 방향으로 변하는 건가? 
    })
        // assign 에 대해서 
            // [기능] 
                // 객체의 원형에 있는 assign 메소드임. 
                // 하나 이상의 객체로부터, 대상 객체로, 속성을 복사 할 때, 사용.

            //  [문법]
                // 두 번째 매개변수는, 객체의 속성을 복사해서, 첫 번째 매개변수의 객체에 속성을 추가한뒤, 
                // 첫 번쨰 매개변수의 객체를 반환한다. 

}
    // [매개변수 해석]
        // `open = false` 는 매개변수의 디폴트 값임. 
    

// open 메소드 추가
    // 왜 prototype 을 사용해서 open 메소드를 추가? 
    // 우선, Drawer 만들 때, 바로 넣었어도 되는 것 아닌가? ❓❓❓❓❓ 
Drawer.prototype.open = function() {
    this.isOpen = true;
    this.elem.style.transform = "translate(0)";
}

// close 메소드 추가
    // close 인데, 왜 translaste 500px 해야 하는 거지? ❓❓❓❓❓❓❓ 
Drawer.prototype.close = function() {
    this.isOpen = false;
    this.elem.style.transform = "translate(500px)";
}

const sideMenu = new Drawer(document.querySelector('.drawer'));

sideMenu.close();

document.querySelector('.drawer-opener').onclick = function() {
    if(!sideMenu.isOpen)sideMenu.open();
    else sideMenu.close();
}