# Closure

## MDN Says

클로저는 **함수와 함수가 선언된 어휘적 환경의 조합이다.**

> 클로저를 이해하려면 자바스크립트의  
> Lexical scoping 를 먼저 이해해야 한다.

[Scope?](https://github.com/Minsoo-web/es_features/blob/master/etc/scope.md)

### 예제

```JavaScript
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
// myFunc 변수에 displayName 을 리턴
// 유효범위의 어휘적 환경을  유지
myFunc(); // Mozilla
```

어휘적 환경이라는 말이 조금 안 와닿을 수 있는데  
JS는 정적 스코프를 가진 언어라는 점을 생각해보면, displayName 이라는 함수가  
**호출될 때** scope 를 형성하는 것이 아니라,  
**선언할 때** 형성된 scope를 참조하여 호출한다는 점을 고려하면  
`displayName` 함수가 호출될 때 **상위 scope**는 전역 컨텍스트가 아닌, makeFunc 함수 컨텍스트가 됩니다.

다른 예를 들어보겠습니다.

```JavaScript
function makeAdder(x) {
    var y =1;
    return function(z){
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
// 클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x: 5, y: 100, z: 2)
console.log(add10(2)); // 112 (x: 10, y: 100, z: 2)
// 함수 실행시 클로저에 저장된 x,y 값에 접근하여 값을 계산
```

`add5`와 `add10`은 둘 다 클로저입니다.  
이들은 같은 함수 본문 정의를 공유하지만 서로 다른 맥락(어휘)적 환경을 저장합니다.
함수 실행시 `add5` 의 맥락적 환경에서 클로저 내부의 x는 5이지만,  
`add10` 의 맥락적 환경에서 x는 10입니다.

이는 클로저가 리턴된 후에도 외부함수의 변수들에 접근이 가능하다는 것을 보여주는 포인트이며  
클로저에 단순히 값 형태로 전달되는 것이 아니라는 것을 의미합니다.

## 실용적인 클로저

클로저는 어떤 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관 시켜주기 때문에 유용합니다.

예를 들면 페이지의 글자 크기를 조정하는 몇 개의 버튼을 추가한다고 가정합니다.  
이 작업을 수행하는 한 가지 방법은 body 요소의 font-size를 픽셀 단위로 지정하고 상대적인 em 단위를 사용하여 다른 요소들의 크기를 설정하는 것입니다.

```CSS
body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
}

h1 {
    font-size: 1.5em;
}

h2 {
    font-size: 1.5em;
}
```

```JavaScript
function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    }
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
```

`size12`, `size14`, `size16` 은 body 요소의 글자 크기를 각각 12, 14, 16 픽셀로 바꾸는 함수이다.

이 함수들을 특정 요소의 클릭 이벤트에 연결할 수 있다.

```JavaScript
document.getElementById('size-12').onClick = size12;
document.getElementById('size-14').onClick = size14;
document.getElementById('size-16').onClick = size16;

```

## 클로저를 이용해서 private method 흉내내기

아래 코드는 프라이빗 함수와 변수에 접근하는 퍼블릭 함수를 정의하기 위해  
클로저를 사용하는 방법입니다. 이렇게 클로저를 사용하는 것을 **모듈 패턴**이라고 합니다.

```JavaScript
var counter = (function(){
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1

```

counter 라는 네임스페이스가 생성이되고 그 안의 `privateCounter` 변수와 `changeBy` 메소드는 return 되지 않음으로 인해  
private한 메소드와 변수가 된 것을 알 수 있습니다.

또한 리턴된 세 퍼블릭 함수들은 같은 환경을 공유하는 클로저가 됨으로서  
어휘적 유효 범위 덕분에 private한 변수와 메소드를 사용하고 접근할 수 있게 되는 겁니다.

## 성능 관련 고려 사항

특정 작업에 클로저가 필요하지 않는데 다른 함수 내에서 함수를 불필요하게 작성하는 것은 현명하지 않습니다.  
이는 처리 속도와 메모리 소비 측면에서 스크립트 성능에 부정적인 영향을 미칠 것이기 때문입니다.

예를 들어, 새로운 객체/클래스를 생성 할 때, 메소드는 일반적으로 객체 생성자에 정의되기보다는 객체의 프로토타입에 연결이 되어야 합니다.  
그 이유는 생성자가 호출 될 때마다 메소드가 다시 할당되기 때문입니다. (즉, 모든 개체가 생성될 때마다.)

```JavaScript
function MyObject(name) {
    this.name = name.toString();
    this.getName = function () {
        return this.name;
    }
}
```

앞의 코드는 클로저의 이점을 이용하지 않으므로 다음과 같이 다시 쓸 수 있습니다.

```JavaScript
function MyObject(name) {
    this.name = name.toString();
}

MyObject.prototype = {
    getName: function(){
        return this.name;
    }
}
```

그러나 프로토타입을 다시 정의하는 것은 권장되지 않으므로,  
기존 프토토타입에 추가하는 다음 예제가 더 좋습니다.

```JavaScript
function MyObject(name) {
    this.name = name.toString();
}

MyObject.prototype.getName = function() {
    return this.name;
}
```
