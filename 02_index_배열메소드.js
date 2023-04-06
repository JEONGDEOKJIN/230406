// 🟦 배열 메소드 좀 더 사용해보자 
    // CRUD 방식으로 ? 정리? 


    // '배열 메소드' 가 제일 많이 사용됨. 
    // 중요하게 생각하고 연습하기 ⭐⭐⭐⭐⭐ 


    // Array.of()
        // 생성자에 of
        // 전달된 인자를 요소로 가지는 배열을 만들어준다. 
        // 배열을 생성할 때, 사용하는 메소드.

        Array.of();

        const arr = Array.of(1,2,3,4,5,6);
        console.log(arr);


    // 원본 배열을 수정하는 메소드
        // 결과값으로 새로운 배열을 반환하는게 아니라,  
        // 원본 배열을 수정하는 메소드
        arr.push(2);    // 2 라는 값이 arr 배열에 들어간다.
        console.log(arr);


    // 원본 배열 수정하지 않고, 값 추가하고, '새로운 배열' 이 생기고, 반환 하는 메소드
        const result = arr.concat(5);
        console.log(arr)
        console.log(result)     // 새로만들어진 배열임

        // 레퍼런스 타입 에 대한 이해는 중요 
            // 같은지, 다른지⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
            // 우리가 객체를 쓸 때, 원본이냐, 원본이 아니냐! 하는 것들 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
        console.log(arr == result)      // false 가 뜸.

        let a = [1,2,3];
        let b = a;
        console.log(a == b)     
            // 같아요 왜냐면, a 가 b 에 '참조' 되었으니까 ⭐⭐⭐⭐⭐⭐ 
        

        let c = [1,2,3]
        let d = [1,2,3]
        console.log(c == d)
            //이건 달라요 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
            // 이런 참조 타입은 '주소' 를 비교함 (값을 비교하는게 아님)
            // so, 새로운걸 만들었을 때, '원본' 이냐, 원본이 아니냐! 가 중요 





        // 특정 배열을 가져와서 -> 거기에 새로운 배열 객체에, 새로운 값을 넣고 싶음, ⭐⭐⭐⭐⭐
            // 1. 오류나기 쉬운 방식
            let e = [1,2,3]
            let f = e;  // 이렇게 하면, e 배열의 '주소' 를 복사하게 됨. 
            f.push(2)   // 2 를 넣는다고 해도 
            console.log(e == f)     // 이 순간 비교할 때, '주소' 를 비교하니까 -> true 가 나옴. 
                // 1) 다른 배열 2) 다른 값을 push 하려면 ->  스프레드 연산자를 사용, 즉, '값만 복사해서 새로운 배열' 을 만든다. 

            // 2. 스프레드 연산자 사용 ⭐⭐⭐⭐⭐⭐ 
            let g = [1,2,3]
            let h = [...g]
                // 스프레드 연산자 사용
                // 이 순간, 1) 값을 복사 해서 2) 새로운 배열! 을 만들어줌 -> 따라서, '주소' 가 달라짐
                // '원본 배열은 유지' 되고, '주소도 다름' 
                h.push(2)

                console.log(g == h)     
                    // false 로 나온다.
                    // 주소가 달라! 라는 의미 ⭐⭐ 
                    // 값이 같아도, 다른 애야! 라는 의미 ⭐⭐ 
                    // 왜? 스프레드 연산자를 써서 -> 1) 값만 복사하고 2) 주소가 다른 배열을 만들었기 때문에 ⭐⭐⭐⭐⭐⭐ 

            // 다른 방법 
                // concat 같은 걸 써서, 값만 쓰던지
            
            // 시사점 
                // 원본을 유지하고, 새로운 배열을 만들어내는지! 



    // 🔷 연습 

        const foods = ['apple' , 'banana' , 'orange'];
        // foods 에 banana 가 있는지 확인 

        // 1. index of
            // 이건 index 를 알려주나❓❓❓ 
            if(foods.indexOf('banana') === -1) {
                foods.push('banana')
            }
                // 없으면 -1 을 보여준다. 
                // 없으면 -> 추가해라~ 라는 말
            console.log(foods)


        // 2. includes (ES7 에 도입⭐)
            // 있는지, 없는지, 확인할 때, 사용하면 좋을 것 같음 ⭐⭐⭐             
        console.log(foods.includes('banana'))
            // 있으면 -> true
            // 없으면 -> flase



        if(!foods.includes('banana')) {
            // 없으면!!! 추가해라
            foods.push('banana')
        }



        // 배열에 추가할 때, push 메소드를 사용하는데, 
        // js 에서는 index 에러가 뜨지 않기 때문에, (정해진 사이즈가 따로 없기 떄문에) 가능한 방법 
        // push 를 안 하고 
            const arr3 = [1,2,3];
            // 배열의 최대 인덱스 = 개수 -1 
            // 0 1 2
            // 0 1 2 3
            arr3[arr3.length] = 3;
            arr3[arr3.length + 1] = 3;      // 이런건 '지양'
                // 배열의 끝에 추가하지 않고, 더 이후의 인덱스에 값을 추가하면, 
                // 중간값들은, 비어있다고, 표시
            console.log(arr3) 







        // 배열의 마지막 요소를 '제거' 하는 메소드 
            // 원본이 수정되는 메소드 임!!!!! 
            const arr5 = [1,2,3,4,5];
            arr5.pop();
                // 원본의 마지막 요소를 제거 
            console.log(arr5)


        // 첫 번쨰 요소를 지우고 싶은 경우
            // shift 메소드
            // 원본이 수정되는 메소드
            arr5.shift();
            console.log(arr5)


        // 배열이 2개 를 하나로, 나란히, 합쳐줌 ⭐⭐⭐⭐⭐ 
            const arr12 = [1,2];
            const arr22 = [3,4];
            const arr23 = arr12.concat(arr22)
            console.log(arr23)
            // 배열을 이어붙일 때, concat 을 사용 
            
            // ex) 판매 상품 리스트가 있음. 
                // 원본 배열을 수정하면 안 되고, 생활 가전 식품 리스트가 따로 있고, 
                // 전체 상품 리스트를 뽑아서, 이벤트성이나, 전체 상품 페이지를 구성해야 할 때, 
                // 원본은 유지하고, 새로운 리스트를 만들 수 있다. 





        // 원본 배열의 중간값을 제거, 추가, 하는 경우
            // splice 메소드 
            const arr61 = [1,2,3,4];
            const result31 = arr61.splice(1,2,20,30);
                // 1,2 인덱스 제거하고, 20,30 을 추가 
            console.log(arr61)      // 원본배열은 제거되고 -> 교체
            console.log(result31)   // 잘라진 결과물들

            const arr7 = [1,2,3,4]
            const result3 = arr7.splice(1,2);
            console.log(arr7)       // 제거 + 추가한 요소 가 반영된 '원본 배열'
            console.log(result3)    // 제거 작업한 요소


            // 배열에서 특정 요소 제거함수 만들어보기 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
            const arr8 = [1,20,3,1,50,6];
            function remove(arr, item) {
                // 제거할 item 의 index
                // indexOf 로 '인덱스를 먼저 찾는다.' 
                const index = arr.indexOf(item);    // 제거할 아이템의 인덱스를 담는다.
                
                if(index !== -1) arr.splice(index, 1);      
                    // 해당 인덱스에서 1개 제거. 
                    // 즉, 그 인덱스에 있는 요소를 제거해준다. 
                
                return arr;

            }

            // 아이템을 쓰면 -> 인덱스 찾고 -> 그걸 제거 
                console.log(remove(arr8, 50));



            // 매개변수로 전달받은 범위의 아이템을 '복사' 해서 배열을 반환해주는 함수
                // slice 메소드 
                // 원본 배열은 바뀌지 않음. / 변환 되지 않음. 

                const arr9 = [1,2,3];
                // arr9.slice(0,1);
                console.log(arr3.slice(0,2))        // ❓❓❓ 여기서 왜 arr3 을 썼지? arr9 가 아니고? 



            // join 
                // 모든 배열을 문자열로 변환 
            
                const arr10 = [1,2,3,4];
                const result4 = arr10.join();
                console.log(result4);


            // reverse 
                // 배열 뒤집기 ⭐⭐ 
                // 배열을 뒤집어주는 메소드 
                console.log(arr10.reverse())


            // fill
                // ES6 에서 넘어옴
                // 인자로 전달받은 값을, 배열의 처음부터 끝 까지 채워준다. 
                // [쓰임새] 
                    // 초기화 할 때 사용 가능
                    // 배열의 개수를 유지하되, 값을 초기화 해야 할 때, 사용
            const arr11 = [1,2,3,4,5];
            arr11.fill(1);

            console.log(arr11)


            // flat() 메소드
                // 중첩된 배열을 -> 하나의 배열로 변환
                // 배열의 depth 를 맞춰준다. 
                    // 2차 배열을 1차 배열로! 

                // 한 뎁스씩 올려서 맞춰준다! 
                // ES10 출신

                // [1,2,3,4,5,[6,7]] == [1,2,3,4,5,6,7]
                
                const arr122 = [1, [2,3,4,5], [5,6]].flat();    // 한 뎁스 씩 올려서 맞춰준다.
                const arr133 = [1, [2,[3]], [2,[5]]].flat(2);   // 매개변수로 뎁스의 개수를 넣자
                    // 매개변수에 끄집어낼 뎁스의 개수를 넣는다. ⭐⭐⭐⭐⭐ 
                    // 1로 매개변수를 넣으면 1개만 꺼낸다. ⭐⭐⭐ 
                    
                    // 배열 안에 배열이 있는데, 한 개의 배열로 작업을 해야 할 것. 

                    // flat 메소드 이용해서, 하나의 배열로 만들어주자. 

                const arr144 = [[[[[[[[[1,2]]]]]]]]].flat(Infinity)
                    // 이미, 글렀지만, 
                    // 매개변수로 'Infinity' 를 전달하면, '뎁스가 몇 개이건 상관없이' 다 꺼내준다.

                console.log(arr122);
                console.log(arr133);
                console.log(arr144);



