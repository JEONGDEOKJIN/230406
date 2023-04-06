// 🟦 이터러블, 이터레이터 

    // 반복자 중 set, map 에 대해 공부할 것 임. 

// 🟦 set 
    // [기능]
        // '배열'에 '중복되지 않은 값' 을 저장할 수 있음. 
        // 자료구조로서 사용되는 객체(Object) 임 (by GPT)

    // [특징]
        // '중복되지 않은 값' 이 저장된다는 점! 
        // '배열은 순서'가 의미있는데, set은 순서는 의미없음. 

        // 값을 찾을 때, '배열은 next' 를 이용해서, 인덱스로 접근
        // set은 '메소드' 를 이용해서 찾는다. 

        // '값' 으로만 이루어져 있고, '중복값은 비허용'

        // ES6 에서 등장 

    // [질문]
        // set 은 자료형인가❓❓❓
            // 자료구조로서 사용되는 객체(Object) 라고 하는데, 자료형은 아닌건가? 


    
    // 🔷 [set 생성, create]
        const s = new Set();
        console.log(s)

        
    // 🔷 [요소 추가, 수정, update] 
        // 1. add 메소드 사용
            s.add("one");
            s.add("one");
                // '동일한 값' 을 넣기 때문에 > 추가 되지 않는다! 
            s.add("two");
            s.add("three");
            console.log(s);

        // 2. 생성단계에서, 생성자 함수에, 배열을 전달
            const arr = [1,2,3,4,5];
            const ss = new Set(arr);
                // set 에 '배열' 을 전달한다. 


    // 🔷 [값 확인, Read]
        // 1. has 메소드 
            console.log(ss.has(2))
                // 2라는 value 가 있는지 확인 
                // 있으면 -> true 를 반환


    // 🔷 [데이터 삭제, Delete]
        // 1. delete 메소드 
            ss.delete(2)
            console.log(ss) 

        // 2. clear 메소드 
            ss.clear();
            console.log(ss);
                // ss 내의 모든 값을 제거 


    // 🔷 순회 
        // 1. forEach
            // forEach 는 iterable 반복자임 (😥😥😥)
            // set 도 iterable 이기 때문에, callback 으로 변수를 확인할 수 있음. (😥😥😥)
            ss.forEach( function(i) {
                console.log(i)
            })


    // 🔷 변환
        // 1. entries() 
            // SetIterable 객체로 변환
            // ❓❓❓ 'SetIterable 객체' 가 뭐지?
            // iterator 뽑은 것 처럼 ⭐⭐⭐⭐⭐ 
            // 이터러블에 이터레이터를 반환 시켜 준다. ❓❓❓❓❓
            const temp = ss.entries();
            console.log(temp.next().value);


// 🟦 Map 

    // [의의]
        // 객체의 종류 중 하나❓❓❓ 

    // [기능]
        // key 와 value 를 저장하는데, key 값을 객체로도 저장할 수 있다. (아직 모르겠음😥😥😥)
    
    // [특징]
        // ES6 부터 추가
        // key, value 를 '한 쌍' 으로 저장
        // ⭐'중복된 key'⭐ 값을 허용하지 않는다. 
        // 'iterator' 를 통해, 'Map 객체 내부를 순회' 할 수 있다.

    
    // [map 생성, create]
        const map = new Map();


    // [값 추가. update]
        // [주의사항] 
            // map 은 값을 추가할 때, key 와 같이 '한 쌍' 으로 추가 해야 함. (왜냐면, key 와 value 가 한 쌍 이니까)
        
        // 1. set 메소드 
            map.set("one", 1);
                // 첫 번째 인자 = key 
                // 두 번째 인자 = value 
            map.set("one", 1)
                // 이건, 'key 가 중복' 이기 때문에, map 에 추가되지 않는다. 
            
            map.set("two", 2)
            console.log(map);
        

    // [추가한 값 읽기, Read]
        // [주의사항]
            // 1. ⭐중복되는 key⭐ 를 허용하지 않는다. 
            // 2. 만약 중복되면, overwrite 됨. so, 끝으로 저장한 key 가 뜬다.

        // 1. get 메소드
            // ex) map.get("뽑고싶은 value 의 key값 자리")
            console.log(map.get("one"))     
                // [결과] 1
            
            console.log(map.get("two"))
                // [결과] 2
                
            console.log(map.size)
                // [결과] 2
                // [해석] 해당 map 에 들어가 있는 값의 개수를 보여줌


        // 2. iterator 로 map 에 저장된 key 만 가져오기 ⭐⭐⭐ 
            const keys = map.keys();
            console.log(keys)
                // [결과] MapIterator {'one', 'two'}
                // [해석] MapIterator 이게 의미하는게 뭔지 잘 모르겠네 😥😥 

        // 2.1 key 만 뽑아보기 ⭐⭐⭐⭐⭐(😥😥😥😥😥아직 부족📛📛)
            for (const iterator of keys) {
                console.log(`iterator써서 key 만 보기 :  ${iterator}`)
            }
                // [결과]
                    // iterator써서 key 만 보기 :  one
                    // iterator써서 key 만 보기 :  two


        // 3. iterator 로 map 에 저장된 value 만 가져오기 ⭐⭐⭐ 
            const values = map.values();
            console.log(values)
                // [결과] MapIterator {1, 2}

        // 3.1 value 만 뽑아보기 ⭐⭐⭐⭐⭐
            for (const iterator of values) {
                console.log(iterator)
            }

        // 3.2 key 랑 value 를 둘 다 출력 ⭐⭐⭐ 
            
            // 3.2.1 mapIterator 객체로 변환 후 구조분해할당 하는 방식
            const iter2 = map.entries();
                // map 을 mapIterator 객체로 변환

            for (const [key, value] of iter2) {
                console.log(`키는 ${key}, 값은 ${value} 임`)
            }
                // iter2 객체에서 key 랑 value 를 '구조분해할당' 으로 가져온다. ⭐⭐⭐⭐⭐ (완전 중요) 
                // ❓❓ 구조분해할당은 mapIterator 여서 가능한거야? 


            // 3.2.2 for each 사용 
                // ❓❓❓ for each 를 쓰면 -> 자동적으로, value 랑 key 에 들어가나? 
                map.forEach(function(value, key) {
                    console.log(`키는 ${key}, 값은 ${value} 이다.`)
                })

            // [종합]
                // 아무래도 for each 가 더 짧으니, 많이 사용하게 될 것 같긴 한데... 
                // 아직, 세세하게 이해하지 못 한 것들이 있어


    // [추가한 값 삭제, delete]
            
        // 1. delete 메소드 
            // ex) map.delete("삭제할 값이 key를 전달")
            map.delete("one")
            console.log(map)
                // [결과] Map(1) {'two' => 2} 
    
    // [변환]
            // 1. entries 메소드 
                // [기능]
                    // 반환값이 [키, 값] 형태의 정보들을 모아서 -> MapIterator 객체로 변환해서 -> 반환 함. ⭐⭐⭐❓❓❓ 

                // [예제]
                const iter = map.entries();
                    // inter에 'mapIterator 객체로 변환' 되어서 들어감. ⭐⭐⭐ 

                console.log(`mapIterator 객체로 형변환 : ${iter}`)
                    // [결과] mapIterator 객체로 형변환 : [object Map Iterator]

                    
    // [기타]
        // 1. map 의 사이즈 확인 
            // [기능] 현재 map 에 저장된 요소의 개수
            console.log(map.size)

        // 2. next 메소드 ❓❓❓❓❓ 
            // console.log(iter.next().value);
            // next 를 사용하면, 다음 요소, 다음 요소를 ? 



        












