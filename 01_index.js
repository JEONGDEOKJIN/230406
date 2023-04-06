// 🟦 이터러블, 이터레이터 


// 반복자 중 set, map 


// 🔷 set 
    // 배열에 중복되지 않는 값을 저장할 수 있다. 
    // '중복되지 않는 유일한 값들' 이 저장 
    // 배열에는 '중복값' 이 들어가는데, set 에는 '중복되지 않는 값' 이 저장된다. 

    // '배열' 은 '요소의 순서'에 의미가 있는데, 
    // 'set' 으 의미가 없음

    // '배열' 은 인덱스로 접근을 하는데, next 로? ❓❓❓ 
    // 'set' 은 인덱스로 접근이 안 된다. ⭐⭐⭐⭐⭐ 
        // 대신, '메소드' 를 이용해서 값을 찾는다. ⭐⭐⭐⭐⭐ 
    
    // ES6 에서 '값' 으로만 이루어져 있고, '중복값은 비허용' 


    // SET 만들어보기 
        const s = new Set();

        console.log(s)

    // 요소를 추가하는 방법 
    
        // add 메소드 사용
        s.add("one");
        s.add("one");   // 하나만 들어온다. 중복 안 된다. 
        s.add("two");
        s.add("three");
        console.log(s);


        // 생성단계에서 생성자 함수에 배열을 전달
            const arr = [1,2,3,4,5];
            const ss = new Set(arr);    
                // set 에 배열을 전달
            console.log(ss)


        // has 메소드 
            console.log(ss.has(2));
                // 2 라는 값이 있는지 확인


        // delete 메소드 : 요소 하나를 제거하는 메소드
        ss.delete(2);
        console.log(ss)


        // claer : 모든 값을 제거하는 메소드 
            // ss.clear();
            console.log(ss);

        // forEach : iterable 반복자 임. 
            // set 도 iterabl 이기 때문에 > callback 으로 변수를 확인할 수 있음. ⭐⭐⭐⭐⭐ (이해 부족📛📛📛)
        ss.forEach(function(i) {
            console.log(i);
        })

        
        // entries() : SetIterable 객체로 반환
            // iterator 뽑은 것 처럼 ⭐⭐⭐⭐⭐ 
            // 이터러블에 이터레이터를 반환 시켜 준다. ❓❓❓❓❓
        const temp = ss.entries();
        console.log(temp.next().value);

    // [정리]
        

    
// 🔷 map

    // [기능]
        // key 와 value 를 저장하는데, key 값을 객체로도 저장할 수 있다. 

    // [특징]
        // es6 부터 추가 
        // key, value 를 '한쌍' 으로 저장 
        // ⭐중복된 key⭐ 값은 허용하지 않는다. ⭐

        // 'iterator' 를 통해 'Map 객체 내부를 순회' 할 수 있다.⭐⭐ 


    // [map 만들어보기]

    const map = new Map();

    // 값 추가 
        // map 은 값을 추가할 때, key 와 같이 한쌍으로 추가 해줘야 함. 
        // key 와 value 가 한 쌍 이니까. 
    
        // set 메소드로 key 와 value 를 저장
        map.set("one" , 1)
        map.set("one" , '겹치는 key 는 하나만 나옴. 끝 값으로 overwrite')
            // 첫 번째 인자 : key 
            // 두 번쨰 인자 : value 
        map.set("two" , 2)
        
        console.log(map);

        // key 값을 저장하는 이유❓
            // 값을 가져올 때, key 로 저장된 값을 호출하려고 
            // so, index 접근이 아니니까, map 에서 값을 호출할 때도 뭔가를 만들었을 것 
            // map 은 get 이라는 메소드로 값 호출 가능
            console.log(map.get("one"));
            console.log(map.get("two"));
            console.log(map.size);  // 지금은 2개가 뜸

        // 중복되는 key 를 허용하지 않는다. 
            // '끝으로 저장한 key' 의 value 가 뜸.
        
    
    // 값 삭제 메소드 
        // map.delete("one")
        // 삭제할 해당 key 값을 매개변수로 전달

        console.log(map);


    // map 의 사이즈 확인 
        // map 에 저장된 요소가 몇 개 인지 확인해보자.
        console.log(map.size);
            
    
    // iterator 로 map 에 저장된 key! 만 가져온다
        const keys = map.keys();
        console.log(keys);


    // map 에 저장된 value 들을 가져오기 
        const values = map.values();
        console.log(values)


    // entries() 
        // 반환값이 [키, 값] 형태의 정보들을 모아서 -> MapIterator 객체로 변환해서 -> 반환 함. ⭐⭐⭐❓❓❓ 

        const iter = map.entries();
            // iter 에 mapIterator 객체로 변환되어서 반환됨 
        console.log(iter)
            // 이제, iterator 객체로 바뀐거야

        // console.log(iter.next().value);
            // next 를 사용하면, 다음 요소, 다음 요소를 ? 


    // 키 정보만 출력 시키게, for of 문으로 작성해보자 

        // key 만 뽑기
        for (const iterator of keys) {
            // 이터레이터요소가 끝날 때 까지 반복하면서, 요소를 보여준다. 
            console.log(iterator);
        }

        // 값만 보여주자!!!!! ⭐⭐⭐ 
        for (const iterator of values) {
            console.log(iterator);
        }

        // key 랑 value 를 다 출력!!!
            //  [key, value] 이건 마치, 구조분해할당!!!!! 
        for (const [key, value] of iter) {
            console.log(`키는 ${key}, 값은 ${value} 임 `);
        }
            // console.log(iter.next().value);
            // 이러레티어를 뽑아서 -> iter 에 넣고 ->구조분해할당으로 빼서 -> 각각 넣음 ⭐⭐⭐⭐⭐ 


    // 키와 값을 호출 ⭐⭐⭐⭐⭐ ()
        // for of 문으로 동일한 기능을 해도 됨.
        // for each 를 많이 사용하게 될 것 
        // 다만, for of 는 key 혹은 value 만 뽑게 되면!!!!! 
    map.forEach(function(value, key) {
        console.log(`키는 ${key}, 값은 ${value} 임.`)
    })








