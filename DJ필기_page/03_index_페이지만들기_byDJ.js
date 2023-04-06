

// 생성자 함수
    function Drawer(el, open = false) {
        this.el = el;
        this.isOpen = open;

        Object.assign(this.el.style, {
            display : "block", 
            position : "fixed", 
            top : 0, 
            bottom : 0,
            right : 0,
            width : "500px",
            padding : "10px",
            backgroundColor : "yellow", 
            transition : "1s"
        });
            // el = element

            // 객체의 원형에 있는 assign 메소드임. 
            // 하나 이상의 객체로부터, 대상 객체로, 속성을 복사 할 때, 사용.
            // 두 번째 매개변수는, 객체의 속성을 복사해서, 첫 번째 매개변수의 객체에 속성을 추가한뒤, 
            // 첫 번쨰 매개변수의 객체를 반환한다. 

            // ❓❓❓❓❓❓❓❓❓ 
                // Object 가 뭐지❓❓❓❓❓ 

            // [요약]
                // 다른 객체의 속성을 복사하고 -> 새로운 객체를 생성한다.

    }
        // `open = false` 이건, 전달되는 매개변수가 없으면, open 에 default로 false 가 들어간다. 


    Drawer.prototype.open = function() {
        this.isOpen = true;
        this.el.style.transform = "translate(910px)";
    }
    
    Drawer.prototype.close = function() {
        this.isOpen = false;
        this.el.style.transform = "translate(1410px)";
    }


    // el 에 들어가고 -> 태그 넘긴 속성, ❓❓❓❓❓❓❓❓❓❓❓ 
    // 이게 어떻게 나오는거지 


    const sideMenu = new Drawer(document.querySelector('.drawer'));
    // 여기에 태그를 전달할 것 임. 
    sideMenu.close();

    document.querySelector('.drawer-opener').onclick = function() {
        if(!sideMenu.isOpen)sideMenu.open();
        else sideMenu.close()
    }

    // 😥😥😥😥😥😥😥  안 되네............... 
    // 프로그래머스 0 레벨




